import { Routes } from '@angular/router';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { ComponenteListaComponent } from './componentes/componente-lista/componente-lista.component';
import { ComponentePadreComponent } from './componentes/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componentes/componente-hijo/componente-hijo.component';

export const routes: Routes = [
    {path:'ejemplo',component: EjemploComponent },
    {path:'lista-productos',component: ComponenteListaComponent },
    {path:'padre',component: ComponentePadreComponent },
    {path:'hijo',component: ComponenteHijoComponent },


];
