import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { authGuard } from './guards/auth.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserUsingApiComponent } from './components/add-user-using-api/add-user-using-api.component';
import { EditUsingApiComponent } from './components/edit-using-api/edit-using-api.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard',component:MasterlayoutComponent,canActivate:[authGuard],
    children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'user-list',component:UserslistComponent},
      {path:'add-user',component:AddUserComponent},
      { path: 'edit/:id', component:EditUserComponent },
      {path:'add-user-api',component:AddUserUsingApiComponent},
      {path:'add-user-api',component:AddUserUsingApiComponent},
      {path:'edit-user-api/:id',component:EditUsingApiComponent},

    ]
  },
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
