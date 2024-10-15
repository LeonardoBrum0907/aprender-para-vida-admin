import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { GetVolunteersService } from '../../services/get-volunteers.service';
import { Volunteer } from '../../types/volunteer.interface';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.scss'
})
export class VolunteersComponent {

  volunteersList: Volunteer[] = [];

  constructor(private getVolunteersList: GetVolunteersService) {}

  ngOnInit(): void {
    this.getVolunteersList.getAllVolunteers().subscribe(data => {
      this.volunteersList = data;
    })
  }

}
