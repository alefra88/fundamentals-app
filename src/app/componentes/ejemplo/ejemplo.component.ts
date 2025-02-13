import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { Producto } from '../../interfaces/Producto';
import { EjemploServiceService } from '../../services/ejemplo-service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponenteListaComponent } from "../componente-lista/componente-lista.component";

@Component({
  selector: 'app-ejemplo',
  imports: [
    FormsModule,
    MatSlideToggleModule,
    ComponenteListaComponent,
],
  templateUrl: './ejemplo.component.html',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent  {


  userName: string = 'Alan';

  doubleDataBinding: string = 'Cerdito';

  condicion: boolean = false;

  contador: number = 0;

  condicion2: string = 'asdas';

  addOne(){
    this.contador++;
  }


  movies: string[] = ['The lighthouse',
    'no manches Frida3','Chabelo y pepito vs los monstruos','el santo y blue demon vs las momias guanajuato'] 

    productoService = inject(EjemploServiceService);
    productosSignal: Signal<Producto[]> = toSignal(this.productoService.getProducto(), { initialValue: [] });
  
    // Guardar la señal en una variable para iterar sobre ella
    producto = this.productosSignal();
   

    text:string = 'Variable desde padre';

    person: any = {
      sex:"hombre",
      age:30
    }
}

