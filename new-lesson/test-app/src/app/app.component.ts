import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  fontSizepx=16

  getMin(a: number,b: number){
    if(a<b){
      return a
    }else{
      return b
    }
  }
}
