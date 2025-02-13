import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class EjemploServiceService {
  constructor(private http: HttpClient){}
  private apiUrl: string = 'https://fakestoreapi.com/products'
  getProducto():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
