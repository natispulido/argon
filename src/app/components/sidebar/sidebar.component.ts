import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/icons', title: 'Pagina Principal',  icon:'ni-shop text-blue', class: '' },
    { path: '/agregarservicio', title: 'Agregar Servicio',  icon:'ni-fat-add text-primary', class: '' },
    { path: '/servicios', title: 'Servicios',  icon:'ni-fat-add text-primary', class: '' },
    { path: '/listaservicios', title: 'Lista de Servicios',  icon:'ni-bullet-list-67 text-primary', class: '' },
    { path: '/maps', title: 'Ubicacion',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/dashboard', title: 'Consejería Académica',  icon: 'ni-single-copy-04 text-primary', class: '' },
    { path: '/login', title: 'Autenticacion',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Registro',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/tables', title: 'Tablas',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
