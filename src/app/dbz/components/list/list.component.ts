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




  onDeletePersonaje (index:number):void{
    console.log(index)
    // this.dbzList?.splice(index)
    this.onDelete.emit(index);
  }


  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

}
