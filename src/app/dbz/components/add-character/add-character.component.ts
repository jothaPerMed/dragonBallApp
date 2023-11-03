import { Component, EventEmitter, Output } from '@angular/core';
import { Characater } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewPerson: EventEmitter<Characater> = new EventEmitter();

  public personaje: Characater = {
    name: "",
    power: 0

  }


  emitPersonajes(): void {

    if (this.personaje.name.length != 0) {
      this.onNewPerson.emit(this.personaje)


    } else {
      return;
    }


  }


   resetForm(){
    this.personaje.name=""
    this.personaje.power=0
  }


}
