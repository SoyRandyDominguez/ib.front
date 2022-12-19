import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserDto } from '../models/register/create-user-dto.model';
import { RegisterService } from './register.service';
@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user:CreateUserDto;
  disableButtoms =false;
  constructor(
    private readonly router: Router,
    private readonly service:RegisterService
  ) { 
    this.user = {
      name:'',
      identityDocument:'',
      lastname:'',
      password:'',
      username:'',
    }
  }

  GoToBack(){
    this.router.navigate(['authentication/login']);
  }

  GoToHome(){
    this.router.navigate(['home/main']);
  }


  createUser(){
    this.disableButtoms = true;
    if(this.validateFields()){
      this.service.createUser(this.user).subscribe((result)=>{
        alert("User created"); 
        this.GoToHome();
      });     
    }else{
      alert('Please, fill in all the fields.')
      this.disableButtoms = false;
    }
    
  }

  validateFields(){
    return this.user.name !== '' && this.user.lastname !== '' && this.user.identityDocument !== ''
    && this.user.username !== ''  && this.user.password !== ''
  }
}
