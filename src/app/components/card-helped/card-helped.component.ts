import { Component, Input } from '@angular/core';
import { Helped } from '../../types/helped.interface';

@Component({
  selector: 'app-card-helped',
  standalone: true,
  imports: [],
  templateUrl: './card-helped.component.html',
  styleUrl: './card-helped.component.scss'
})
export class CardHelpedComponent {

  @Input() helped!: Helped

}
