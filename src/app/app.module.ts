import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LetterOnlyDirective } from './directives/letter-only.directive';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { MasterlayoutComponent } from './components/masterlayout/masterlayout.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './interceptotrs/auth.interceptor';
import { StringOnlyDirective } from './directives/string-only.directive';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUsingApiComponent } from './components/edit-using-api/edit-using-api.component';
import { AddUserUsingApiComponent } from './components/add-user-using-api/add-user-using-api.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LetterOnlyDirective,
    HomeComponent,
    NotfoundComponent,

    SidebarComponent,
    UserslistComponent,
    MasterlayoutComponent,

    NavbarComponent,
    StringOnlyDirective,
    AddUserComponent,
    EditUserComponent,
    EditUsingApiComponent,
    AddUserUsingApiComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  } ,
],


  bootstrap: [AppComponent]
})
export class AppModule { }

