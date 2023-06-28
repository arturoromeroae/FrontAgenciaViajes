import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompraComponent } from './components/compra/compra.component';
import { CreateComponent } from './components/create/create.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { AerolineaComponent } from './components/aerolinea/aerolinea.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { VueloComponent } from './components/vuelo/vuelo.component';
import { CreateVueloComponent } from './components/create-vuelo/create-vuelo.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { CreateAerolineaComponent } from './components/create-aerolinea/create-aerolinea.component';
import { CreateActividadComponent } from './components/create-actividad/create-actividad.component';
import { CreateTrabajadorComponent } from './components/create-trabajador/create-trabajador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actividades', component: ActividadComponent },
  { path: 'aerolineas', component: AerolineaComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'compras', component: CompraComponent },
  { path: 'hoteles', component: HotelComponent },
  { path: 'documentos', component: TipoDocumentoComponent },
  { path: 'trabajadores', component: TrabajadorComponent },
  { path: 'vuelos', component: VueloComponent }
];

@NgModule({
  declarations: [
    AppComponent, 
    CompraComponent, 
    CreateComponent, 
    ClienteComponent,
    TrabajadorComponent,
    HotelComponent,
    AerolineaComponent,
    TipoDocumentoComponent,
    ActividadComponent,
    VueloComponent,
    CreateVueloComponent,
    CreateHotelComponent,
    CreateClienteComponent,
    CreateAerolineaComponent,
    CreateActividadComponent,
    CreateTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
