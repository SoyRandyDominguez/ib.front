import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Authentication/auth.service';
import { CreateAccountDto } from './create-account-dto.model';
import { NewProductService } from './new-product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  createAccount:CreateAccountDto;
  confirmPassword:string = "";
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly service:NewProductService

  ) {
    this.createAccount = {
      clientId: 0,
      password:"",
      typeCode:""
    };
   }

  ngOnInit(): void {
    this.createAccount.clientId = this.authService.getUserStorage().clientId;
  }

  CreateAccount(){
    if(this.createAccount.typeCode ===''){
      alert('Please, select a account type')
      return;
    }
    if(this.confirmPassword ==='' || this.createAccount.password === '' ||
      this.confirmPassword !== this.createAccount.password){
      alert('Please, confirm the password')
      return;
    }
    this.service.CreateAccount(this.createAccount).subscribe((res)=>{
      alert('Success: account created');
      this.GoBackHome();
    },(err)=>{
      if(err.status === 401){
        alert('Error: Unauthorized')
      }else{
        alert('Error: Internal server')
      }
    })
  }

  GoBackHome(){
    this.router.navigate(['home/main']);
  }

}
