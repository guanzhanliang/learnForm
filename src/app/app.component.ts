import {Component} from '@angular/core';
interface User {
  username: string;
  password: string;
  age?: number;
  sex?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  user: any = {};
  user1: User = {
    username: 'guanzhanliang',
    password: '123123',
    age: 30,
    sex: '1',
  }

  onKeyPressOnlyNumber(event: any) {
    let keyCode = event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 8 && keyCode <= 13) || (keyCode >= 96 && keyCode <= 105)) {
      event.returnValue = true;
    } else {
      event.returnValue = false;
    }
  }
}
