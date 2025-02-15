import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{
  users:any[]=[]
  usersl:any[]=[];
  searchtext:string=''
constructor(private _userService:UsersService,private toastr:ToastrService,private router:Router ){}
ngOnInit(): void {
  this.getuserList()
  this.getuserListlocal()
}


getuserList(){
  this._userService.getUserlist().subscribe((res:any)=>{
      this.users=res.users


  })
}

getuserListlocal(){
  this.usersl = this._userService.getUsers()
}




deleteUserl(userId: number) {
  console.log(userId)
  this._userService.deleteUsers(userId);
  this.usersl = this._userService.getUsers(); 
  this.toastr.warning('deleted ');
}

editUserl(userId: number) {
  console.log(userId);
  this.router.navigate(['dashboard/edit', userId]);
}



deleteUser(id:number){
  this._userService.deleteUser(id).subscribe({
    next:data=>{console.log(data)
   this.toastr.success('deleted', 'done')},
    error:err=>{
      console.log(err)
      this.toastr.error(err.message)},

      })
}


editapi(userId: number) {
  console.log(userId);
  this.router.navigate(['dashboard/edit-user-api', userId]);
}

}
