import { Component, Input,  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Authentication/auth.service';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent{
  @Input() activeMenu:string | null = null;
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }
  GoLink(route:string){
    this.router.navigate(['home/'+route]);
  }

  Logout(){
    this.authService.logout();
    this.router.navigate(['authentication']);
  }

}
