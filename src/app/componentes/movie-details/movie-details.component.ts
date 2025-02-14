import { Component, inject, OnInit, signal, untracked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EjemploServiceService } from '../../services/ejemplo-service.service';
import { Producto } from '../../interfaces/Producto';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent implements OnInit {
  private productoServicio = inject(EjemploServiceService);

  selectedProducto = toSignal<Producto | undefined>(this.productoServicio.getProductoId(0).pipe(
    map(productos => productos.length > 0 ? productos[0] : undefined)
  ), { initialValue: undefined });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Asegurarse de que 'id' sea un número
    this.selectedProducto = toSignal(
      this.productoServicio.getProductoId(id).pipe(
        map(productos => productos.length > 0 ? productos[0] : undefined)
      ),
      { initialValue: undefined }
    );
  }
}