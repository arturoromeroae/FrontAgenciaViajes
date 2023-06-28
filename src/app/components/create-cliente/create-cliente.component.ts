import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onCompraCreate(clientes: {
    nameCl: any;
    lnameCl: any;
    nroDocCl: any;
    birthdateCl: any;
    idTd: any;
  }) {
    console.log(clientes);
    this.http
      .post('https://localhost:7005/PlaceCliente', clientes)
      .subscribe((res: any) => {
        console.log(clientes);
        this.response = res;
      });
  }
}
