import { Component, inject } from '@angular/core';
import { EjemploServiceService } from '../../services/ejemplo-service.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
// export class UserDetailsComponent {
//   constructor(private route: ActivatedRoute, private userService: EjemploServiceService){}
// id!: number;
// user: any;

// ngOnInit(): void {
//   this.id = +this.route.snapshot.params['id']; // Asegúrate de que 'id' sea un número
//   this.user = toSignal(
//     this.userService.getProductoId(this.id).pipe(
//       map(productos => productos.length > 0 ? productos[0] : undefined)
//     )
//   );
// }
// }
export class UserDetailsComponent {
  id!: number;
  user: any;

  constructor(private route: ActivatedRoute, private userService: EjemploServiceService) {
    this.id = +this.route.snapshot.params['id']; // Asegúrate de que 'id' sea un número
    this.user = toSignal(
      this.userService.getProductoId(this.id).pipe(
        map(productos => productos.length > 0 ? productos[0] : undefined)
      )
    );
  }
}