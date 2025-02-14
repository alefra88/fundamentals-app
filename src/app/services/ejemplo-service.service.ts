import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class EjemploServiceService {
  users:any;
  constructor(private http: HttpClient){
    this.users = [];
  }
  private urlApiUsers: string = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl: string = 'https://fakestoreapi.com/products'
  getProducto():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProductoId(id:number):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiUrl}/${id}`);
  }

  //users
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.urlApiUsers);
  }

  getUser(id:number){
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }
}
