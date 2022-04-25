import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Servicio } from '../models/servicio.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private dbPath = '/services';
  serviciosRef: AngularFirestoreCollection<Servicio>;
  constructor(private db: AngularFirestore) {
    this.serviciosRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Servicio> {
    return this.serviciosRef;
  }
  create(servicio: Servicio): any {
    return this.serviciosRef.add({ ...servicio });
  }
  update(id: string, data: any): Promise<void> {
    return this.serviciosRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.serviciosRef.doc(id).delete();
  }
}
