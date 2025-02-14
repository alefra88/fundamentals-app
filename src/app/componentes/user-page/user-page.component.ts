import { Component, inject, OnInit } from '@angular/core';
import { EjemploServiceService } from '../../services/ejemplo-service.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-page',
  imports: [
    RouterLink,
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  userService = inject(EjemploServiceService);
    user = toSignal(this.userService.getUsers(), { initialValue: [] });
  
}
