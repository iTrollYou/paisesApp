import { Component } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private capitalService: CapitalService) { }

  termino: string = "";
  hayError: boolean = false;
  capitales: Capital[] = [];

  buscarTerminoCapital(terminoHijo: string): void {
    this.hayError = false;
    this.termino = terminoHijo;
    this.capitalService.buscarCapital(this.termino)
      .subscribe({
        next: (resp) => {
          this.capitales = resp;
        },
        error: () => {
          this.hayError = true;
          this.capitales = [];
        }
      });
  }

}
