import { Passenger } from "./models/passenger.interface";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";


@Injectable()
export class PassengerDashboardService {


  private _apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }
  // old way
  // getPassnegers(): Observable<Passenger[]> {
  //   return this.http
  //              .get(PASSENGER_API)
  //              .pipe(map((response: HttpResponse) => response.json()))
  // }

  // new way
  getPassnegers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(`${this._apiUrl}/passengers`)
  }

  updatePassenger(passenger: Passenger): Observable<Passenger[]> {
    return this.http
      .put(`${this._apiUrl}/passengers/${passenger.id}`, passenger)
      .pipe(map((data: any) => {
        return data.passengers
      }))
  }

  getVladChildren(): Observable<any[]> {
    return this.http.get<any[]>(`${this._apiUrl}/vlad-children`);
  }
  createChildren(data: { name: string }): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${this._apiUrl}/vlad-children`, data);
  }
}