import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name="New User";
  constructor() {
  }

  changeUserName(userName)
  {
    this.name = userName;
    console.log(this.name);
  }
  ngOnInit() {
  }

}
