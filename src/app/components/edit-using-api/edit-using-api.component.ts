import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-using-api',
  templateUrl: './edit-using-api.component.html',
  styleUrls: ['./edit-using-api.component.css']
})
export class EditUsingApiComponent implements OnInit {
    editUserForm!: FormGroup;
    userId!: number;
    userImage!: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private userService: UsersService,
      private toastr:ToastrService
    ) {}

    ngOnInit() {
      this.userId = Number(this.route.snapshot.paramMap.get('id'));

      this.editUserForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        age: ['', Validators.required],
        image: ['']
      });


      this.userService.getUserByIda(this.userId).subscribe(user => {
        // this.userImage = user.image;
        this.editUserForm.patchValue(user);
      });
    }

    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (img: any) => {
          this.userImage = img.target.result; // عرض الصورة قبل الحفظ
          this.editUserForm.patchValue({ image: this.userImage });
        };
        reader.readAsDataURL(file);
      }
    }
    // onFileSelected(event: any) {
    //   const file = event.target.files[0]; // الحصول على الملف المختار
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       const base64Image = reader.result as string; // تحويل الصورة إلى Base64
    //       this.userImage = base64Image; // تحديث الصورة المعروضة
    //       this.editUserForm.get('image')?.setValue(base64Image); // تخزين Base64 في النموذج
    //     };
    //     reader.readAsDataURL(file); // قراءة الملف وتحويله إلى Base64
    //   }
    // }

    onSubmit() {

        this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(() => {
          this.toastr.success('modified', 'done')
          this.router.navigate(['dashboard/user-list']);
        });

    }
}
