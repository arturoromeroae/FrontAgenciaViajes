import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClienteResponse } from '../model/cliente-response';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "https://localhost:7005/GetClientes"
  constructor(private httpClient: HttpClient) {}

  getClientes():Observable<any>{
    return this.httpClient.get<ClienteResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
