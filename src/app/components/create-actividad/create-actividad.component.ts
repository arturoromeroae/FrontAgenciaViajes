import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-actividad',
  templateUrl: './create-actividad.component.html',
  styleUrls: ['./create-actividad.component.css']
})
export class CreateActividadComponent {
  response: any;
  constructor(private http: HttpClient) {}
  onActividadCreate(actividades: {
    idAct: 1;
    nameAct: any;
    duracionAct: any;
    precioAct: any;
  }) {
    console.log(actividades);
    this.http
      .post('https://localhost:7005/PlaceActividad', actividades)
      .subscribe((res: any) => {
        console.log(actividades);
        this.response = res;
      });
  }
}
