import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseUrl: string = "http://localhost:57815/api/requestlnes"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Requestline[]>;
  }

  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Requestline>;
  }

  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseUrl}`, requestline) as Observable<Requestline>;
  }

  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${this.baseUrl}/${requestline.id}`, requestline) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
