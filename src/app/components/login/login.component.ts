import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//  test:string='hi'


logininfo:string=''

constructor(private _loginservice:LoginService ,
  private _auth:AuthService,private router:Router,private toastr: ToastrService){
}

getlogininfo(){
  this._loginservice.getinfo().subscribe(
    {
      next:(data:any)=>{
        this.logininfo=data
      },
      error:(err:string)=>{},
      complete:()=>{}
    }
  )
}

loginform:FormGroup=new FormGroup({
  'username':new FormControl('emilys',
    [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  'password':new FormControl('emilyspass',[Validators.required])
})

login(){
console.log(this.loginform)
this._auth.login(this.loginform.value).subscribe({
  next:data=>{
  console.log(data);
  localStorage.setItem('token',data.accessToken)

  this._auth.saveUserdata()
  this.toastr.success('Hello !')},
  error:err=>{
    console.log(err)
    this.toastr.error(err.message)},

  complete:()=>this.router.navigateByUrl('/dashboard')
})
}





}
