import { Component, OnInit} from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
    <passenger-count></passenger-count>
    <passenger-detail></passenger-detail>
    <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
          {{i + 1}}: {{ passenger.fullName }}
          <span class="date">
            Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd') : 'Not checked in' }}
          </span>
          <span class="children">
            Children: {{ passenger.children?.length || 0}}
          </span>
        </li>
      </ul>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit')
    this.passengers = [
      {
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 139074200000,
        children: null
      },
      {
        id: 2,
        fullName: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7}]
      },
      {
        id: 3,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1391606000000,
        children: null
      },
      {
        id: 4,
        fullName: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      },
      {
        id: 5,
        fullName: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ]
  }
}