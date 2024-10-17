import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { GetVolunteersService } from '../../services/get-volunteers.service';
import { Volunteer } from '../../types/volunteer.interface';

@Component({
  selector: 'app-card-volunteer',
  standalone: true,
  imports: [NgIf, RouterLink, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './card-volunteer.component.html',
  styleUrl: './card-volunteer.component.scss'
})
export class CardVolunteerComponent {
  @Input() volunteer!: Volunteer

  editVolunteerForm!: FormGroup

  modalIsOpen: boolean = false
  modalConfirmDeleteIsOpen: boolean = false
  showButton: boolean = false
  submitDataIsLoading: boolean = false

  constructor(
    private volunteerService: GetVolunteersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.editVolunteerForm = this.formBuilder.group({
      name: [this.volunteer.name],
      email: [this.volunteer.email],
      phone: [this.volunteer.phone],
      address: [this.volunteer.address],
      status: [this.volunteer.status],
      availability: [this.volunteer.availability],
      area: [this.volunteer.area],
      comment: [this.volunteer.comment]
    })

  }

  toggleButtons() {
    this.showButton = !this.showButton
  }

  toggleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }

  toggleConfirmDeleteModal() {
    this.modalConfirmDeleteIsOpen = !this.modalConfirmDeleteIsOpen
  }

  editVolunteerData() {
    this.submitDataIsLoading = true
    this.volunteerService.editVolunteerData(this.volunteer._id, this.editVolunteerForm.value).subscribe(data => {
      this.volunteer = data
      this.submitDataIsLoading = false
      this.toggleModal()
    })
  }

  deleteVolunteer() {
    this.submitDataIsLoading = true
    this.volunteerService.deleteVolunteerById(this.volunteer._id).subscribe(() => {
      this.submitDataIsLoading = false
      this.toggleConfirmDeleteModal()
    })
  }
}
