import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private _auth:AuthService){}

logout(){
  this._auth.logout()
}

selectedItem: string = 'home';

setActive(item: string) {
  this.selectedItem = item;
}
}
