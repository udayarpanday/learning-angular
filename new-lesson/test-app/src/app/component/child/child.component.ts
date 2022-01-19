import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message='A message from child'
  @Input() childMessage:string
  @Output() parentMessage=new EventEmitter<string>()
  @Output() testMessage=new EventEmitter<string>()
  constructor() {
    this.childMessage=""

  }

  ngOnInit(): void {
    this.sendMessage()
  }
  onClick(){
    this.testMessage.emit()
  }

  sendMessage(){
    this.parentMessage.emit("K cha")

  }



}
