import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Authentication/auth.service';
import { MainService } from '../main.service';

@Component({
  selector: 'total-header',
  templateUrl: './total-header.component.html',
  styleUrls: ['./total-header.component.scss']
})
export class TotalHeaderComponent implements OnInit {

  balanceTotal: number = 0;
  constructor(
    private readonly service: MainService,
    private readonly authService:AuthService
  ) { }

  ngOnInit(): void {
    this.GetBalance();
  }

  GetBalance(){
    this.service.GetBalance(this.authService.getUserStorage().clientId).subscribe((res)=>{
      this.balanceTotal = res;
    });
  }
}
