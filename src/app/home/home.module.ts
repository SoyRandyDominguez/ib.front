import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TotalHeaderComponent } from './main/total-header/total-header.component';
import { AccountListComponent } from './main/account-list/account-list.component';


@NgModule({
  declarations: [
    MainComponent,
    TotalHeaderComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
