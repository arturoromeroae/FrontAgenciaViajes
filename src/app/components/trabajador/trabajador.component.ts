import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent {
  trabajadores: Trabajador[] = [];
  currentData: Trabajador | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private trabajadorService: TrabajadorService, private http: HttpClient) {
    this.trabajadorService.getTrabajadores().subscribe((res) => (this.trabajadores = res));
  }
}
