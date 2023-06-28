import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AerolineaResponse } from '../model/aerolinea-response';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {
  url = "https://localhost:7005/GetAerolineas"
  constructor(private httpClient: HttpClient) {}

  getAerolineas():Observable<any>{
    return this.httpClient.get<AerolineaResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
