import { Component, inject, input, Input } from '@angular/core';
import { EjemploServiceService } from '../../services/ejemplo-service.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-componente-lista',
  imports: [],
  templateUrl: './componente-lista.component.html',
  styleUrl: './componente-lista.component.css'
})
export class ComponenteListaComponent {

  
  private productoService = inject(EjemploServiceService);

  productos = toSignal(this.productoService.getProducto(), { initialValue: [] });

  // @Input()
  // msg:string='';

  msg = input<string>('');

  // @Input()
  // person:any;
  person = input<any>();
}
