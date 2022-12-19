import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Authentication/auth.service';
import { LoginDto } from '../models/login/login-dto.model';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  disableButtoms = false;
  login:LoginDto
  constructor(
    private readonly router: Router,
    private readonly service: LoginService,
    private readonly authService: AuthService
  ) { 
    this.login = {
      password:'',
      username:'',
    }
  }

 

  GoToRegisterUser(){
    this.router.navigate(['authentication/register']);
  }

  GoToHome(){
    this.router.navigate(['home/main']);
  }

  async Login(){
    this.disableButtoms = true;
    if(this.validateFields()){
      this.service.login(this.login).subscribe((result)=>{
      if(!result){
        this.disableButtoms = false;
        alert("this user does not exist");  
      }else{
        this.authService.setUserStorage(result);
        this.GoToHome();
      }
    },(err)=>{
      alert("ERROR");  
      this.disableButtoms = false;
    });
    }else{
      this.disableButtoms = false;
      alert('Please, fill in all the fields.')
    }
  }

  validateFields(){
    return this.login.username !== ''  && this.login.password !== ''
  }
}
