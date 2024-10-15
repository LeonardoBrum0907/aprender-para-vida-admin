import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Helped } from '../../types/helped.interface';

@Injectable({
  providedIn: 'root'
})
export class GetHelpedService {

  readonly apiUrl = "https://aprender-para-vida-api.onrender.com"

  private allHelpeds: BehaviorSubject<Helped[]> = new BehaviorSubject<Helped[]>([])
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private http: HttpClient) {
    this.http.get<Helped[]>(`${this.apiUrl}/helped`).subscribe(data => {
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
}
