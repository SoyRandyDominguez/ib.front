import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from '../models/register/create-user-dto.model';
import { UserResponseDto } from '../models/register/user-response-dto.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private readonly http: HttpClient) {
    //this empty method is intentional
  }

  createUser(user:CreateUserDto){
    const url = new URL('authentication/register-user',environment.baseUrl);
    return this.http.post<UserResponseDto>(url.toString(),user);
  }
}
