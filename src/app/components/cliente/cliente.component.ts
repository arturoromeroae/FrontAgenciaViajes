import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clientes: Cliente[] = [];
  currentData: Cliente | null = null;
  response: any;
  clienteName: any = '';
  clienteId: any = '';
  constructor(private clienteService: ClienteService, private http: HttpClient) {
    this.clienteService.getClientes().subscribe((res) => (this.clientes = res));
  }

}
