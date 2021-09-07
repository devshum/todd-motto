import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span 
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      {{ detail.fullName }}
      <span class="date">
        Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd') : 'Not checked in' }}
      </span>
      <span class="children">
        Children: {{ detail.children?.length || 0}}
      </span>
    </div>
  `
})

export class PassengerDetailComponent {
  @Input() detail: Passenger;
  constructor() {
    
  }
}