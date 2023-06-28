import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-aerolinea',
  templateUrl: './create-aerolinea.component.html',
  styleUrls: ['./create-aerolinea.component.css']
})
export class CreateAerolineaComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onAerolineaCreate(aerolineas: {
    idAero: 1;
    nameAero: any;
  }) {
    console.log(aerolineas);
    this.http
      .post('https://localhost:7005/PlaceAero', aerolineas)
      .subscribe((res: any) => {
        console.log(aerolineas);
        this.response = res;
      });
  }
}
