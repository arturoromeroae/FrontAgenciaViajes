import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CompraResponse } from '../model/compra-response';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  url = "https://localhost:7005/GetCompras"
  constructor(private httpClient: HttpClient) {}

  getCompras():Observable<any>{
    return this.httpClient.get<CompraResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
