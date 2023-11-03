import { Component, Input } from '@angular/core';
import { Characater } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public dbzList ?: Characater[]


}
