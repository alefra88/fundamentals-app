import { Component } from '@angular/core';
import { ComponenteHijoComponent } from "../componente-hijo/componente-hijo.component";

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  name: string = '';
  setName(e:string){
    this.name = e;
  }
}
