import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  phone=""
  @Input() size!:number;
  @Output() sizeChange=new EventEmitter<number>()

  constructor() {
    this.phone
   }

  ngOnInit(): void {
  }

  dec(){
    this.resize(-1)
  }
  inc(){
    this.resize(+1)
  }
  resize(delta:number){
    this.size=Math.min(40,Math.max(8,+this.size+delta))
    this.sizeChange.emit(this.size)
  }
  callPhone(phone:string){
    console.log(phone)
  }

}