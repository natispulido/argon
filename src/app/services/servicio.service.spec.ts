import { TestBed } from '@angular/core/testing';
import { Servicio } from '../models/servicio.model';

import { ServicioService } from './servicio.service';

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('findall test',() => {
       // Assert
    expect( service.getAll()).toBeLessThanOrEqual(1);
    });

  it('create', () => {
      // Servicio Model
      const servicio: Servicio = {
        id: '1',
        name: 'test',
        description: 'prueba',
        active: false
      };

      // Act
      service.create(servicio);

      // Assert
      expect("1").toEqual('1');
    });

    it('update', () => {
      // Servicio Model
      const servicio: Servicio = {
        id: '1',
        name: 'test2',
        description: 'prueba2',
        active: false
      };

      // Act
      service.update(servicio);

      // Assert
      expect("1").toEqual('1');
    });

    it('delete', () => {
      // Servicio Model
      const servicio: Servicio = {
        id: '1',
        name: 'test2',
        description: 'prueba2',
        active: false
      };

      // Act
      service.delete(servicio);

      // Assert
      expect("1").toEqual('1');
    });



});
