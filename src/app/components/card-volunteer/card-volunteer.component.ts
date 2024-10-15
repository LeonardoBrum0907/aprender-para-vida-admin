import { Component, Input } from '@angular/core';
import { Volunteer } from '../../types/volunteer.interface';

@Component({
  selector: 'app-card-volunteer',
  standalone: true,
  imports: [],
  templateUrl: './card-volunteer.component.html',
  styleUrl: './card-volunteer.component.scss'
})
export class CardVolunteerComponent {
  @Input() volunteer!: Volunteer
}
