import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TrabajadorResponse } from '../model/trabajador-response';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  url = "https://localhost:7005/GetWorkers"
  constructor(private httpClient: HttpClient) {}

  getTrabajadores():Observable<any>{
    return this.httpClient.get<TrabajadorResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
