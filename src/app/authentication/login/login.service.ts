import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserResponseDto } from '../models/register/user-response-dto.model';
import { LoginDto } from '../models/login/login-dto.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) {
    //this empty method is intentional
  }

  login(login:LoginDto){
    const url = new URL('authentication/login',environment.baseUrl);
    return this.http.post<UserResponseDto>(url.toString(),login);
  }

  setUserStorage(user:UserResponseDto){
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
