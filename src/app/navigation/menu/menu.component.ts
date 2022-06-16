import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();
  @Input() darkMode: any;
  showSmallMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.toggleDarkModeEvent.emit(!this.darkMode);
  }
}
