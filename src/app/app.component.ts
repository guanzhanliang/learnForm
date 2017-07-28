import {Component} from '@angular/core';
interface User {
  userName: string;
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
  user: any = {};
 /* user: User = {
    userName: 'guanzhanliangceshi',
    password: '123123',
    age: 30,
    sex: '1',
  }*/
  versions = [
    {display:'angular v1',value:1.6},
    {display:'angular v2',value:2.9},
    {display:'angular v3',value:3.5},
    {display:'angular v4',value:4.7}
  ];


  onKeydownOnlyNumber(event: any) {
    let keyCode = event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 8 && keyCode <= 13) || (keyCode >= 96 && keyCode <= 105)) {
      event.returnValue = true;
    } else {
      event.returnValue = false;
    }
  }

  randomNumber(min,max){
  let range = max - min;
  let rand = Math.random();
  //四舍五入
  let num = min + Math.round(rand * range);
  return num;
}


  onSubmit(arg01: any) {

  }
}
