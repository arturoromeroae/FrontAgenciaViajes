import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HotelResponse } from '../model/hotel-response';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url = "https://localhost:7005/GetHoteles"
  constructor(private httpClient: HttpClient) {}

  getHoteles():Observable<any>{
    return this.httpClient.get<HotelResponse>(this.url).pipe(
      map(res => res.result)
    )
  }
}
