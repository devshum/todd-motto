import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>

      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit() {
    this.route.params
        .pipe(
          switchMap((data: any) => this.passengerService.getPassneger(data.id))
        )
        .subscribe((data: Passenger) => this.passenger = data)
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
        .updatePassenger(event)
        .subscribe((data: any) => {
          return
        })
  }

  goBack() {
    this.router.navigate(['/passengers'])
  }
}

