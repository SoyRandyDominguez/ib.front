import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountResponseDto } from 'src/app/shared/models/account-response-dto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private readonly http: HttpClient) {}

  GetBalance(clientId:number){
    const url = new URL(`Account/get-total-balance-by-clientid?clientId=${clientId}`,environment.baseUrl);
    return this.http.get<number>(url.toString());
  }

  GetAccounts(clientId:number){
    const url = new URL(`Account/get-all-by-clientid?clientId=${clientId}`,environment.baseUrl);
    return this.http.get<AccountResponseDto[]>(url.toString());
  }
}
