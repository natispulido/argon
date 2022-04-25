import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listaservicios',
  templateUrl: './listaservicios.component.html',
  styleUrls: ['./listaservicios.component.scss']
})

export class ListaServiciosComponent implements OnInit {
  servicios?: Servicio[];
  servicioActual?: Servicio;
  indiceActual = -1;
  name = '';
  constructor(private servicioService: ServicioService) { }
  ngOnInit(): void {
    this.recuperarServicios();
  }
  refrescarLista(): void {
    this.servicioActual = undefined;
    this.indiceActual = -1;
    this.recuperarServicios();
  }
  recuperarServicios(): void {
    this.servicioService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.servicios = data;
    });
  }
  fijarServicioActivo(servicio: Servicio, indice: number): void {
    this.servicioActual = servicio;
    this.indiceActual = indice;
  }
}
