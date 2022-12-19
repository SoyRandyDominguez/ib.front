import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-header',
  templateUrl: './total-header.component.html',
  styleUrls: ['./total-header.component.scss']
})
export class TotalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.GetBalance();
  }

  GetBalance(){
    //..
  }
}
