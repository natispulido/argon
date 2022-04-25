import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-agregarservicio',
  templateUrl: './agregarservicio.component.html',
  styleUrls: ['./agregarservicio.component.scss']
})

export class AgregarServicioComponent implements OnInit {
  servicio: Servicio = new Servicio();
  submitted = false;
  constructor(private servicioService: ServicioService) { }
  ngOnInit(): void {
  }
  guardarServicio(): void {
    this.servicioService.create(this.servicio).then(() => {
      console.log('Created new service successfully!');
      this.submitted = true;
    });
  }
  nuevoServicio(): void {
    this.submitted = false;
    this.servicio = new Servicio();
  }
}
