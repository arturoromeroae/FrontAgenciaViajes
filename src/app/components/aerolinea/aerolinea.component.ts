import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Aerolinea } from 'src/app/model/aerolinea';
import { AerolineaService } from 'src/app/services/aerolinea.service';

@Component({
  selector: 'app-aerolinea',
  templateUrl: './aerolinea.component.html',
  styleUrls: ['./aerolinea.component.css']
})
export class AerolineaComponent {
  aerolineas: Aerolinea[] = [];
  currentData: Aerolinea | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private aerolineaService: AerolineaService, private http: HttpClient) {
    this.aerolineaService.getAerolineas().subscribe((res) => (this.aerolineas = res));
  }
}
