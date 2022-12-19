import { Injectable } from '@angular/core';
import { UserResponseDto } from 'src/app/authentication/models/register/user-response-dto.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setUserStorage(user:UserResponseDto){
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUserStorage(){
    return JSON.parse(sessionStorage.getItem(USER_KEY)?? '{}');
  }

  logout(){
    sessionStorage.removeItem(USER_KEY)
  }
}


const USER_KEY: string = 'userdata'
