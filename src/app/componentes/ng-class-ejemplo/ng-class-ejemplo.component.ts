import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  maxDuration:number=150;
  director: FormControl;

  constructor(){
    this.name = new FormControl('', Validators.required);
    this.duration =  new FormControl('', [Validators.required,Validators.max(this.maxDuration)]);
    this.director = new FormControl('');
    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    })
  }
  handleSubmit(): void {
    console.log("movie created:", this.movieForm.value);
    this.movieForm.reset();
  }
}
