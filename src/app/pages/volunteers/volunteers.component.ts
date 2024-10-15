import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardVolunteerComponent } from '../../components/card-volunteer/card-volunteer.component';
import { GetVolunteersService } from '../../services/get-volunteers.service';
import { Volunteer } from '../../types/volunteer.interface';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [CardVolunteerComponent, NgFor],
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
