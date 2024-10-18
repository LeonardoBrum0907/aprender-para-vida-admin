import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Helped } from './../../types/helped.interface';

@Injectable({
  providedIn: 'root'
})
export class GetHelpedService {

  private allHelpeds: BehaviorSubject<Helped[]> = new BehaviorSubject<Helped[]>([])
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private http: HttpClient) {
    this.http.get<Helped[]>(environment.apiUrlHelped).subscribe(data => {
      this.allHelpeds.next(data)
      this.isLoading.next(false)
    })
  }

  getLoading():  Observable<boolean> {
    return this.isLoading
  }

  getAllHelpeds(): Observable<Helped[]> {
    return this.allHelpeds
  }

  helpedEditData(id: string, helped: Helped): Observable<Helped> {
    const url = `${environment.apiUrlHelped}/${id}`
    return this.http.put<Helped>(url, helped)
  }

  getHelpedById(id: string): Observable<Helped> {
    const url = `${environment.apiUrlHelped}/${id}`
    return this.http.get<Helped>(url)
  }

  deleteHelpedById(id: string): Observable<Helped[]> {
    const url = `${environment.apiUrlHelped}/${id}`
    this.http.delete<Helped[]>(url).subscribe(data => {
      this.allHelpeds.next(data)
    })
    return this.allHelpeds
  }
}
