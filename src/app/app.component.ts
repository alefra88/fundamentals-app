import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploComponent } from "./componentes/ejemplo/ejemplo.component";
import { ComponenteListaComponent } from "./componentes/componente-lista/componente-lista.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentals-app';
}
