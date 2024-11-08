import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel-header.component.html',
  styleUrl: './panel-header.component.scss'
})
export class PanelHeaderComponent {
  @Input() panelTitle: string = '';
  @Output() search = new EventEmitter<string>();
  searchValue: string = '';

  onSearchChange(): void {
    this.search.emit(this.searchValue);
  }
}
