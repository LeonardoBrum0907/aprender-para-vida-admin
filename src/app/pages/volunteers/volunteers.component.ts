import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.scss'
})
export class VolunteersComponent {

}
