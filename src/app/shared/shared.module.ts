import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AuthService } from './Authentication/auth.service';

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
  ],
  providers:[AuthService]
})
export class SharedModule { }
