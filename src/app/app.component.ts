import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New World of Angular JS';

  alertMessage = true;
  name="New User";

  changeUserName(userName)
  {
    this.name = userName;
    this.alertMessage = false;
    console.log(this.name);
  }
}
