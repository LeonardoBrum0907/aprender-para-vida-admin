import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PanelHeaderComponent } from "./components/panel-header/panel-header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PanelHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aprender-para-vida-admin';

  currentPage!: string;

  panelTitle!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(this.router.url === '/volunteers') {
        this.panelTitle = 'Voluntários'
      } else if (this.router.url === '/helped') {
        this.panelTitle = 'Precisando de ajuda'
      }
    })
  }
}
