import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: any
  newMessage:string
  constructor() {
    this.newMessage=""
   }

  ngOnInit(): void {
    this.receiveMsg
  }

  receiveMsg(msg:string){
    this.newMessage=msg
  }
  ngAfterViewInit(){
    // alert(this.child.message)
  }
}

