import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
      this.passengerService
          .getPassneger(1)
          .subscribe((data: Passenger) => this.passenger = data)
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
        .updatePassenger(event)
        .subscribe((data: any) => {
          return
        })
  }
}

