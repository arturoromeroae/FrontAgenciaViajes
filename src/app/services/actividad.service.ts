import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActividadResponse } from '../model/actividad-response';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url = "https://localhost:7005/GetActividades"
  constructor(private httpClient: HttpClient) {}

  getActividades():Observable<any>{
    return this.httpClient.get<ActividadResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
