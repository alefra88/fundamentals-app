import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentePadreComponent } from '../componente-padre/componente-padre.component';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-componente-hijo',
  imports: [
    MatCard
  ],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
@Output()
login:EventEmitter<string>= new EventEmitter<string>;
  userName: string = 'AlanDev';
  handleLogin(){
    this.login.emit(this.userName);
  }
}
