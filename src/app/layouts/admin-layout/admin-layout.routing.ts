import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AgregarServicioComponent } from '../../pages/agregarservicio/agregarservicio.component';
import { ListaServiciosComponent } from 'src/app/pages/listaservicios/listaservicios.component';
import { ServiciosComponent } from 'src/app/pages/servicios/servicios.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'agregarservicio',   component: AgregarServicioComponent },
    { path: 'listaservicios',   component: ListaServiciosComponent },
    { path: 'servicios',   component: ServiciosComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
