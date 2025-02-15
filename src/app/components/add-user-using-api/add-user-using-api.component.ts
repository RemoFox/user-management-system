import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user-using-api',
  templateUrl: './add-user-using-api.component.html',
  styleUrls: ['./add-user-using-api.component.css']
})
export class AddUserUsingApiComponent {
imagePreview: string = '';

  constructor(private _userService:UsersService, private _router:Router,private toastr:ToastrService) {}

    addUserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required ,Validators.minLength(4) ]),
      email: new FormControl('', [Validators.required ,Validators.email ]),
      phone: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required ]),
      image: new FormControl('')
    });



  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        this.imagePreview = base64Image;
        this.addUserForm.get('image')?.setValue(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }

  addUser() {
      this._userService.addUser(this.addUserForm.value).subscribe({
        next:data=>{
          this.toastr.success(`${this.addUserForm.value.firstName} added sussefully`),
          this._router.navigate(['/dashboard/user-list']); 
        },
        error:err=>{
          console.log(err)
          this.toastr.error(err.message)},
      });
  }
}
