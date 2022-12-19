import { Injectable } from '@angular/core';
import { UserResponseDto } from 'src/app/authentication/models/register/user-response-dto.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setUserStorage(user:UserResponseDto){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUserStorage(){
    return JSON.parse(sessionStorage.getItem('user')?? '{}');
  }
}
