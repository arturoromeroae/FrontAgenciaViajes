import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onCompraCreate(compras: {
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
