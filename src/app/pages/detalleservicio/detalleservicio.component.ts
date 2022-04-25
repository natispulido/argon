import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Servicio } from 'src/app/models/servicio.model';
import { ServicioService } from 'src/app/services/servicio.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalleservicio',
  templateUrl: './detalleservicio.component.html',
  styleUrls: ['./detalleservicio.component.scss']
})

export class DetalleServicioComponent implements OnInit, OnChanges {
  @Input() servicio?: Servicio;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  servicioActual: Servicio = {
    name: '',
    description: '',
    active: false
  };
  message = '';
  constructor(private servicioService: ServicioService, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.servicioActual = { ...this.servicio };
  }
  actualizarEstado(status: boolean): void {
    if (this.servicioActual.id) {
      this.servicioService.update(this.servicioActual.id, { active: status })
      .then(() => {
        this.servicioActual.active = status;
        this.message = '¡El estado fue actualizado exitosamente!';
      })
      .catch(err => console.log(err));
    }
  }
  actualizarServicio(): void {
    const data = {
      name: this.servicioActual.name,
      description: this.servicioActual.description
    };
    if (this.servicioActual.id) {
      this.servicioService.update(this.servicioActual.id, data)
        .then(() => this.message = '¡Los datos del servicio fueron actualizados exitosamente!')
        .catch(err => console.log(err));
    }
  }
  eliminarServicio(): void {
    if (this.servicioActual.id) {
      this.servicioService.delete(this.servicioActual.id)
        .then(() => {
          this.refreshList.emit();
          this.message = '¡El servicio fue eliminado exitosamente!';
        })
        .catch(err => console.log(err));
    }
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
