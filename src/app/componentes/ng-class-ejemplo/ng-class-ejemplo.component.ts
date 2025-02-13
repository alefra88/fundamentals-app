import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-ejemplo',
  imports: [
    NgClass
  ],
  templateUrl: './ng-class-ejemplo.component.html',
  styleUrl: './ng-class-ejemplo.component.css'
})
export class NgClassEjemploComponent {
  isDark:boolean = true;

  toggleDark(){
    this.isDark = !this.isDark
  }
}
