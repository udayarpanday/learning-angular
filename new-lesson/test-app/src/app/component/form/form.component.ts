import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/pet.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  species = ["fish", "cat", 'dog'];
  model =new Pet(1,'Goldie',this.species[0])
  submitted=false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true
  }

}
