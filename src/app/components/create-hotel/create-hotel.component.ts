import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onCompraCreate(compras: {
    idCr: 1;
    subtotalCr: any;
    totalCr: any;
    idVuelo: any;
    idHot: any;
    idCl: any;
    idTb: any;
    idAct: any;
  }) {
    console.log(compras);
    this.http
      .post('https://localhost:7005/PlaceCompra', compras)
      .subscribe((res: any) => {
        console.log(compras);
        this.response = res;
      });
  }
}
