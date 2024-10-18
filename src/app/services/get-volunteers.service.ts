import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Volunteer } from '../types/volunteer.interface';

@Injectable({
  providedIn: 'root'
})
export class GetVolunteersService {

  private allVolunteers: BehaviorSubject<Volunteer[]> = new BehaviorSubject<Volunteer[]>([])
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private http: HttpClient) {
    this.http.get<Volunteer[]>(environment.apiUrlVolunteers).subscribe(data => {
      this.allVolunteers.next(data)
      this.isLoading.next(false)
    })
  }

  getLoading(): Observable<boolean> {
    return this.isLoading
  }

  getAllVolunteers(): Observable<Volunteer[]> {
    return this.allVolunteers
  }

  editVolunteerData(id: string, Volunteer: Volunteer): Observable<Volunteer> {
    const url = `${environment.apiUrlVolunteers}/${id}`
    return this.http.put<Volunteer>(url, Volunteer)
  }

  getVolunteerById(id: string): Observable<Volunteer> {
    const url = `${environment.apiUrlVolunteers}/${id}`
    return this.http.get<Volunteer>(url)
  }

  deleteVolunteerById(id: string): Observable<Volunteer[]> {
    const url = `${environment.apiUrlVolunteers}/${id}`
    this.http.delete<Volunteer[]>(url).subscribe(data => {
      this.allVolunteers.next(data)
    })
    return this.allVolunteers
  }
}
