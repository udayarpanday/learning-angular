import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styles:[`
  h1{
    color:red
  }`]
})

export class HelloWorldComponent implements OnInit,OnDestroy  {
  intervalSub: any;
  ngOnInit(): void {
    this.intervalSub=setInterval(()=>{
      console.log('Hello')
    },1000)

  }
  ngOnDestroy(): void {
      if(this.intervalSub){
        clearInterval(this.intervalSub)
      }
  }
  title="Hello World"


}
 