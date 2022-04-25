import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServiciosComponent } from './listaservicios.component';

describe('ListaServiciosComponent', () => {
  let component: ListaServiciosComponent;
  let fixture: ComponentFixture<ListaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
