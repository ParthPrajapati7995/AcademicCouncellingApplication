import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name="New User";
  amount:number = 0;
  alertMessage = true;
  constructor() {

  }

  changeUserName(userName)
  {
    this.name = userName;
    this.alertMessage = false;
    console.log(this.name);
  }

  displayDonationAmount(value:number)
  {
    this.amount = parseInt(this.amount)+parseInt(value);
  }
  ngOnInit() {
  }

}
