import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event)">

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleChange(event: any) {
    this.name = event.target.value;
  }
}