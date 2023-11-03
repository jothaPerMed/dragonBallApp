import { Injectable } from '@angular/core';
import { Characater } from '../interfaces/Character.interface';
import {v4 as uuid} from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }


  public characters?: Characater[] = [{
    id:uuid(),
    name: 'Krillin',
    power: 50
  }, {
    id:uuid(),
    name: 'Goku',
    power: 800
  },
  {
    id:uuid(),
    name: 'Vegeta',
    power: 600
  },
  {
    id:uuid(),
    name: 'Picolo',
    power: 400
  }


];




  ngOnInit() { }

  onNewPerson(personaje : Characater){
    console.log(personaje);
    if(personaje!=undefined){
      const newPersonaje: Characater = {id:uuid(), ...personaje}
      this.characters?.push(newPersonaje);
    }

  }

  onDeletePersonaje(index:number){
    this.characters?.splice(index, 1);
  }
}
