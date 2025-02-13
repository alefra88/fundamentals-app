import { Component, EventEmitter, output, Output } from '@angular/core';
import { ComponentePadreComponent } from '../componente-padre/componente-padre.component';
import { MatCard } from '@angular/material/card';
import { ProductoEjem } from '../../interfaces/ProductoEjem';
@Component({
  selector: 'app-componente-hijo',
  imports: [
    MatCard
  ],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

// @Output()
// login:EventEmitter<string>= new EventEmitter<string>;
  
userName: string ;

producto: ProductoEjem;

//usamos el constructor para inicializar variables que tengamos en esta clase
constructor(){
  this.userName = 'AlanDev';
  this.producto = {
    name:"compu",
    price:1,
    isForSale: true
  }
}

login = output<string>();
  
  handleLogin(){
    this.login.emit(this.userName);
  }
}
