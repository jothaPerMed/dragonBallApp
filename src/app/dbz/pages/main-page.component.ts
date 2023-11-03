import { Component, OnInit } from '@angular/core';
import { Characater } from '../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {


  public characters?: Characater[] = [{
    name: 'Krillin',
    power: 50
  }, {
    name: 'Goku',
    power: 800
  },
  {
    name: 'Vegeta',
    power: 600
  },
  {
    name: 'Picolo',
    power: 400
  }


];


  constructor() { }

  ngOnInit() { }

  onNewPerson(personaje : Characater){
    console.log(personaje);
    if(personaje!=undefined){
      this.characters?.push(personaje);
    }

  }
}
