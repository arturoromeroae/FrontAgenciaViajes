import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  hoteles: Hotel[] = [];
  currentData: Hotel | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private hotelService: HotelService, private http: HttpClient) {
    this.hotelService.getHoteles().subscribe((res) => (this.hoteles = res));
  }
}
