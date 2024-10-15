import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardHelpedComponent } from "../../components/card-helped/card-helped.component";
import { GetHelpedService } from '../../services/helped/get-helped.service';
import { Helped } from '../../types/helped.interface';

@Component({
  selector: 'app-helped',
  standalone: true,
  imports: [NgFor, CardHelpedComponent],
  templateUrl: './helped.component.html',
  styleUrl: './helped.component.scss'
})
export class HelpedComponent {

  helpedList: Helped[] = []
  isLoading: boolean = true

  constructor(private getHelpedList: GetHelpedService) {}

  ngOnInit(): void {
    this.getHelpedList.getAllHelpeds().subscribe(data => {
      this.helpedList = data
    })
    this.getHelpedList.getLoading().subscribe(isLoading => {
      this.isLoading = isLoading
      console.log(this.isLoading)
    })
  }

}
