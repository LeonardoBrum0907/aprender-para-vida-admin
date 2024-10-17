import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { Helped } from '../../types/helped.interface';
import { GetHelpedService } from './../../services/helped/get-helped.service';

@Component({
  selector: 'app-card-helped',
  standalone: true,
  imports: [NgIf, RouterLink, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './card-helped.component.html',
  styleUrl: './card-helped.component.scss'
})
export class CardHelpedComponent {

  @Input() helped!: Helped
  editHelpedForm!: FormGroup

  modalIsOpen: boolean = false
  modalConfirmDeleteIsOpen: boolean = false
  showButton: boolean = false
  submitDataIsLoading: boolean = false

  constructor(
    private helpedService: GetHelpedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.editHelpedForm = this.formBuilder.group({
      name: [this.helped.name],
      email: [this.helped.email],
      phone: [this.helped.phone],
      address: [this.helped.address],
      status: [this.helped.status],
      area: [this.helped.area],
      comment: [this.helped.comment]
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

  helpedEditData() {
    this.submitDataIsLoading = true
    this.helpedService.helpedEditData(this.helped._id, this.editHelpedForm.value).subscribe(data => {
      this.helped = data
      this.submitDataIsLoading = false
      this.toggleModal()
    })
  }

  deleteHelped() {
    this.submitDataIsLoading = true
    this.helpedService.deleteHelpedById(this.helped._id).subscribe(() => {
      this.submitDataIsLoading = false
      this.toggleConfirmDeleteModal()
    })
  }
}
