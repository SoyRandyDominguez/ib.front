import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly service: LoginService
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
        this.GoToHome();
      }
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
