import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent  {
  editUserForm: FormGroup;
  userId: number | null = null;
  imagePreview: string = '';

  constructor(
    private route: ActivatedRoute,private router: Router,
    private fb: FormBuilder,private userService: UsersService ) {
    this.editUserForm = this.fb.group({
      id: [''],
      name: ['',[Validators.required ,Validators.minLength(4) ]],
      email: ['', [Validators.required ,Validators.email ]],
      number: ['', [Validators.required]],
      age: ['', [Validators.required ]],
      image: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id ? Number(id) : null;

    if (this.userId !== null) {
      this.loadUserData();
    }
  }


  loadUserData() {
    const user = this.userService.getUserById(this.userId as number);
    if (user) {
      this.editUserForm.patchValue(user);
      this.imagePreview = user.image;
    }
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        this.imagePreview = base64Image;
        this.editUserForm.get('image')?.setValue(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }

  // ✅ حفظ التعديلات
  saveChanges() {
    this.userService.updateUsers(this.editUserForm.value);
    this.router.navigate(['dashboard/user-list']);
  }

}
