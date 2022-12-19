import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserDto } from '../models/register/create-user-dto.model';
import { RegisterService } from './register.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:CreateUserDto;
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

  ngOnInit(): void {
  }
  GoToBack(){
    this.router.navigate(['authentication/login']);
  }

  async createUser(){
    if(this.validateFields()){
      const result = await this.service.createUser(this.user).toPromise();
      alert("User created");      
      console.log('result',result);
    }else{
      alert('Please, fill in all the fields.')
    }
    
  }

  validateFields(){
    return this.user.name !== '' && this.user.lastname !== '' && this.user.identityDocument !== ''
    && this.user.username !== ''  && this.user.password !== ''
  }
}
