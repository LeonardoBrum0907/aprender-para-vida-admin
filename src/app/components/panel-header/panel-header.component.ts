import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-header',
  standalone: true,
  imports: [],
  templateUrl: './panel-header.component.html',
  styleUrl: './panel-header.component.scss'
})
export class PanelHeaderComponent {
  @Input() panelTitle: string = ''
}
