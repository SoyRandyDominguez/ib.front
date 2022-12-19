import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TotalHeaderComponent } from './main/total-header/total-header.component';
import { AccountListComponent } from './main/account-list/account-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductService } from './new-product/new-product.service';
import { MainService } from './main/main.service';


@NgModule({
  declarations: [
    MainComponent,
    TotalHeaderComponent,
    AccountListComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[NewProductService,MainService]
})
export class HomeModule { }
