import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // alert(this.route.snapshot.paramMap.get('id')) //to get the params from the url
  }

}
