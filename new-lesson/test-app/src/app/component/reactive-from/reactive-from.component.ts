import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {
  name=new FormControl('');
  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue("Nancy")
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
