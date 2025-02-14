import { Routes } from '@angular/router';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { ComponenteListaComponent } from './componentes/componente-lista/componente-lista.component';
import { ComponentePadreComponent } from './componentes/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componentes/componente-hijo/componente-hijo.component';
import { NgClassEjemploComponent } from './componentes/ng-class-ejemplo/ng-class-ejemplo.component';
import { MovieDetailsComponent } from './componentes/movie-details/movie-details.component';
import { UserPageComponent } from './componentes/user-page/user-page.component';
import { UserDetailsComponent } from './componentes/user-details/user-details.component';

export const routes: Routes = [
    {path:'ejemplo',component: EjemploComponent },
    {path:'lista-productos',component: ComponenteListaComponent },
    {path:'padre',component: ComponentePadreComponent },
    {path:'hijo',component: ComponenteHijoComponent },
    {path:'ngclass',component: NgClassEjemploComponent },
    {path:'movies/:id',component: MovieDetailsComponent },
    {path:'users',component: UserPageComponent },
    {path:'users/:id',component: UserDetailsComponent },

    
];
