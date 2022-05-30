import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = "https://restcountries.com/v3.1";


  constructor(private http: HttpClient) { }


  buscarCapital(termino: string): Observable<Capital[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return (this.http.get<Capital[]>(url));
  }
}
