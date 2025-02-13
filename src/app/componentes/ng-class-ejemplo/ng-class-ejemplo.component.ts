import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-ejemplo',
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './ng-class-ejemplo.component.html',
  styleUrl: './ng-class-ejemplo.component.css'
})
export class NgClassEjemploComponent {
  isDark:boolean = true;

  toggleDark(){
    this.isDark = !this.isDark
  }

  //formulario
  movieForm: FormGroup;
  name:FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(){
    this.name = new FormControl('');
    this.duration =  new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    })
  }
  handleSubmit(): void {
    console.log(this.movieForm);
  }
}
