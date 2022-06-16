import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  darkMode = false;

  toggleDarkMode(event: boolean) {
    this.darkMode = event;
  }

  ngOnInit(): void {
  }
}
