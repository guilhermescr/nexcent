import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
})
export class HeaderNavbarComponent {
  @Input() isNavbarOpen!: boolean;
  @Output() closeNavbarEvent = new EventEmitter();

  fireCloseNavbarEvent(): void {
    this.closeNavbarEvent.emit();
  }
}
