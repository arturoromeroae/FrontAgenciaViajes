import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TipoDocumentoResponse } from '../model/tipo-documento-response';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  url = "https://localhost:7005/GetTiposDocs"
  constructor(private httpClient: HttpClient) {}

  getTiposDocumentos():Observable<any>{
    return this.httpClient.get<TipoDocumentoResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
