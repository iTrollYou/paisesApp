import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300))
      .subscribe(
        valor => {
          this.onDebounce.emit(valor);
        })
  }

  @Input() placeHolder = "";


  @Output() onEnter: EventEmitter<string> = new EventEmitter();


  // Evento dejar de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debounce: Subject<string> = new Subject();

  termino: string = "";

  buscarTermino() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debounce.next(this.termino);
  }



}
