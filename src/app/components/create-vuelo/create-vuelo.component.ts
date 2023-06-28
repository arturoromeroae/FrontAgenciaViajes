import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-vuelo',
  templateUrl: './create-vuelo.component.html',
  styleUrls: ['./create-vuelo.component.css']
})
export class CreateVueloComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onVueloCreate(vuelos: {
    destinoVuelo: any;
    salidaVuelo: any;
    dateVuelo: any;
    asientoVuelo: any;
    precio: any;
    idAero: any;
  }) {
    console.log(vuelos);
    this.http
      .post('https://localhost:7005/PlaceVuelo', vuelos)
      .subscribe((res: any) => {
        console.log(vuelos);
        this.response = res;
      });
  }
}
