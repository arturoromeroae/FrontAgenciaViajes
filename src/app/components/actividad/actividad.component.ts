import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent {
  actividades: Actividad[] = [];
  currentData: Actividad | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private trabajadorService: ActividadService, private http: HttpClient) {
    this.trabajadorService.getActividades().subscribe((res) => (this.actividades = res));
  }
}
