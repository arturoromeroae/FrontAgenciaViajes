import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TipoDocumento } from 'src/app/model/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.css']
})
export class TipoDocumentoComponent {
  tiposDocumentos: TipoDocumento[] = [];
  currentData: TipoDocumento | null = null;
  response: any;
  trabajadorName: any = '';
  trabajadorId: any = '';
  constructor(private tiposDocumentosService: TipoDocumentoService, private http: HttpClient) {
    this.tiposDocumentosService.getTiposDocumentos().subscribe((res) => (this.tiposDocumentos = res));
  }
}
