import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

imagePreview: string = '';

  constructor(private _userService:UsersService, private _router:Router,private toastr:ToastrService) {}

    addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required ,Validators.minLength(4) ]),
      email: new FormControl('', [Validators.required ,Validators.email ]),
      number: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required ]),
      image: new FormControl('')
    });



  onFileSelected(event: any) {
    const file = event.target.files[0]; // الحصول على الملف المختار
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string; // تحويل الصورة إلى Base64
        this.imagePreview = base64Image; // تحديث الصورة المعروضة
        this.addUserForm.get('image')?.setValue(base64Image); // تخزين Base64 في النموذج
      };
      reader.readAsDataURL(file); // قراءة الملف وتحويله إلى Base64
    }
  }

  addUser() {
    console.log(this.addUserForm);
      this._userService.addUsers(this.addUserForm.value);
      this.toastr.success(`${this.addUserForm.value.name} added sussefully`)
      this._router.navigate(['/dashboard/user-list']); 
  }










  }





