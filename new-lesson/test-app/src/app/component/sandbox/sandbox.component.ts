import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name=""
  onSale=false;
  isUnchanged=true;
  showText=false
  todaysDate=new Date
  constructor() { }

  ngOnInit(): void {
  }
  toggleText(event:any):void{
    this.showText=!this.showText

  }
  onSave(){
    console.log('Remove mouse')
  }
}
