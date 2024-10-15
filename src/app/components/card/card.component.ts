import { Component, Input } from '@angular/core';
import { Volunteer } from '../../types/volunteer.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() volunteer!: Volunteer

  ngOnInit(): void {
    console.log(this.volunteer)
  }
}
