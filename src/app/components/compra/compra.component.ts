import { Component, AfterViewInit } from '@angular/core';
import { Compra } from 'src/app/model/compra';
import { CompraService } from 'src/app/services/compra.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
})
export class CompraComponent {
  compras: Compra[] = [];
  currentData: Compra | null = null;
  response: any;
  compraSubtotal: any = '';
  compraId: any = '';
  constructor(private compraService: CompraService, private http: HttpClient) {
    this.compraService.getCompras().subscribe((res) => (this.compras = res));
  }

  setCurrentData(compra: Compra | null) {
    this.currentData = compra ? { ...compra } : null;
  }

  onCompraDelete(compra: Compra | null) {
    if (compra) {
      console.log(compra);
      this.http
        .delete(`https://localhost:7005/DeleteCompra/${compra.idCr}`)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.response = `Compra ${res.result} deleted successfully.`;
          },
          (error: any) => {
            console.log(error);
            // Handle error response here
          }
        );
    } else {
      console.log('No category selected for deletion.');
    }
  }

  onCompraUpdate(id: any) {
    this.currentData = this.compras.find((c) => c.idAct === id) || null;
    // let curr = this.categories.find((c) => (c.categoryId === id))
    this.compraSubtotal = this.currentData?.subtotalCr;
    this.compraId = this.currentData?.totalCr;
  }

  onCategoryUpdateForm() {
    console.log(this.currentData);
    if (this.currentData) {
      const updatedCategory = {
        id: this.currentData.idCr,
        name: this.currentData.subtotalCr,
      };

      this.http
        .put('https://localhost:7161/api/Category', updatedCategory)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.response = `Category ${res.result} updated successfully.`;
          },
          (error: any) => {
            console.log(error);
            // Handle error response here
          }
        );
    } else {
      console.log('No category selected for update.');
    }
  }
}
