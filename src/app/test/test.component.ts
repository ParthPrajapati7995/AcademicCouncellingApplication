import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  amount:number = 0;

  constructor() {

  }

  displayDonationAmount(value)
  {
    this.amount = this.amount+parseInt(value);
  }
  ngOnInit() {
  }

}
