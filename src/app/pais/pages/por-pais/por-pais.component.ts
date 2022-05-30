import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) { }

  termino: string = "";
  hayError: boolean = false;
  paises: Pais[] = [];

  buscarTermino(terminoHijo: string): void {
    this.hayError = false;
    this.termino = terminoHijo;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          this.paises = resp;
        },
        error: () => {
          this.hayError = true;
          this.paises = [];
        }
      });
  }

  sugerencias(terminoSugerido: string) {
    this.hayError = false;
    // this.buscarTermino(terminoSugerido);
  }

}
