import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuHeaderComponent } from './menu-header/menu-header.component';

@NgModule({
  declarations: [
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    MenuHeaderComponent
  ]
})
export class SharedModule { }
