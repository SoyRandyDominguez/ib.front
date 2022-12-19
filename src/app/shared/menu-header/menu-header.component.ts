import { Component, Input,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent{
  @Input() activeMenu:string | null = null;
  constructor(
    private readonly router: Router
  ) { }
  GoLink(route:string){
    this.router.navigate(['home/'+route]);
  }

}
