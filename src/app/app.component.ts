import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PanelHeaderComponent } from "./components/panel-header/panel-header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { GetVolunteersService } from './services/get-volunteers.service';
import { Volunteer } from './types/volunteer.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PanelHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aprender-para-vida-admin';

  panelTitle!: string;
  VolunteerList: Volunteer[] = []

  constructor(private router: Router, private volunteersService: GetVolunteersService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(this.router.url === '/volunteers') {
        this.panelTitle = 'Voluntários'
      } else if (this.router.url === '/helped') {
        this.panelTitle = 'Precisando de ajuda'
      }
    })

    this.volunteersService.getAllVolunteers().subscribe(data => {
      this.VolunteerList = data
    })
  }
}
