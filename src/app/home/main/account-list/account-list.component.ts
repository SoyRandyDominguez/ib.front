import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Authentication/auth.service';
import { AccountResponseDto } from 'src/app/shared/models/account-response-dto.model';
import { MainService } from '../main.service';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: AccountResponseDto[] = [];
  constructor(
    private readonly service: MainService,
    private readonly authService:AuthService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.GetBalance();
  }

  GetBalance(){
    this.service.GetAccounts(this.authService.getUserStorage().clientId).subscribe((res)=>{
      if(res){
        this.accounts = res;
      }
    });
  }

  OpenNewProduct(){
    this.router.navigate(['home/new-product']);
  }
}
