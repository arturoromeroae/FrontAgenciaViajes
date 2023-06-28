import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-trabajador',
  templateUrl: './create-trabajador.component.html',
  styleUrls: ['./create-trabajador.component.css']
})
export class CreateTrabajadorComponent {
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
