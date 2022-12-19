import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountResponseDto } from 'src/app/shared/models/account-response-dto.model';
import { environment } from 'src/environments/environment';
import { CreateAccountDto } from './create-account-dto.model';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private readonly http: HttpClient) {
    //this empty method is intentional
  }

  CreateAccount(create:CreateAccountDto){
    const url = new URL(`Account/create-account`,environment.baseUrl);
    return this.http.post<AccountResponseDto>(url.toString(),create);
  }
 
}
