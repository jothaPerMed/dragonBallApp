import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characater } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public dbzList ?: Characater[]




  onDeletePersonaje (id?:string):void{
    this.onDelete.emit(id);
  }


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

}
