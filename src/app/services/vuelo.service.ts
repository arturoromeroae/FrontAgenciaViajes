import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VueloResponse } from '../model/vuelo-response';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  url = "https://localhost:7005/GetVuelos"
  constructor(private httpClient: HttpClient) {}

  getVuelos():Observable<any>{
    return this.httpClient.get<VueloResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
