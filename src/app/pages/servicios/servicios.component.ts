import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

import { ServicioService } from "src/app/services/servicio.service";
import { Servicio } from "src/app/models/servicio.model";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
})
export class ServiciosComponent implements OnInit {
  public serviceSelected: Servicio = {};
  public serviciosFilter?: Servicio[] = [];
  public servicios?: Servicio[] = [];
  public focus = false;

  public serviciosForm = {
    description: "",
    active: true,
    name: "",
  };

  public configAlert: {
    status: boolean;
    message: string;
    class: string;
    time: number;
  } = {
    status: false,
    message: "",
    class: "",
    time: 5,
  };

  public statusErrorForm = false;
  public statusEdit = false;
  public statusNew = false;

  public loadingStatus = {
    servicios: false,
  };

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll = () => {
    this.loadingStatus.servicios = true;
    this.servicioService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.loadingStatus.servicios = false;
        this.serviciosFilter = data;
        this.servicios = data;
      });
  };

  searchServiceByName = (name: string) =>
    (this.serviciosFilter = this.servicios.filter(
      (service) => service.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    ));

  setValueUpdateService = (service) => {
    Object.entries(service).forEach(
      (elm: any[]) => (this.serviciosForm[elm[0]] = elm[1])
    );
  };

  addOrUpdateService = (editar, agregar) => {
    if (agregar) {
      this.servicioService.create(this.serviciosForm).then(() => {
        this.getAll();
      });
    } else if (editar) {
      this.servicioService
        .update((this.serviciosForm as any).id, this.serviciosForm)
        .then(() => {
          this.getAll();
          this.resetFormAndClearFields();
        });
    }

    this.resetFormAndClearFields();

    this.configAlert.message = agregar
      ? "Servicio agregado exitosamente"
      : "Servicio editado exitosamente";
    this.configAlert.class = "success";
    this.configAlert.status = true;

    this.alertService();
  };

  deleteService = (id) =>
    this.servicioService.delete(id).then(() => {
      this.resetFormAndClearFields();
      this.getAll();

      this.configAlert.message = "Servicio eliminado exitosamente";
      this.configAlert.class = "success";
      this.configAlert.status = true;

      this.alertService();
    });

  resetFormAndClearFields = () => {
    Object.keys(this.serviciosForm).forEach(
      (elm) => (this.serviciosForm[elm] = elm === "active" ? true : "")
    );

    this.statusErrorForm = false;
    this.serviceSelected = {};
    this.statusEdit = false;
    this.statusNew = false;
  };

  alertService = () => {
    let timeAlert = setInterval(() => {
      this.configAlert.time--;
      if (this.configAlert.time === 0) {
        this.configAlert.status = false;
        this.configAlert.time = 5;
        clearInterval(timeAlert);
      }
    }, 1000);
  };
}
