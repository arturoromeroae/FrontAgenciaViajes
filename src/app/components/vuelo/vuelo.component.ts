import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Vuelo } from 'src/app/model/vuelo';
import { VueloService } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent {
  vuelos: Vuelo[] = [];
  currentData: Vuelo | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private vueloService: VueloService, private http: HttpClient) {
    this.vueloService.getVuelos().subscribe((res) => (this.vuelos = res));
  }
}
