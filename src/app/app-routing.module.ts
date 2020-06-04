import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { SickListComponent } from './sick-list/sick-list.component';
import { VetDocComponent } from './vet-doc/vet-doc.component';
import { OnePatientComponent } from './one-patient/one-patient.component';
import { OneSickListComponent } from './one-sick-list/one-sick-list.component';
import { OneVetDocComponent } from './one-vet-doc/one-vet-doc.component';


const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'sick-list',
    component: SickListComponent
  },
  {
    path: 'vet-doc',
    component: VetDocComponent
  },
  {
    path: 'patients/:id',
    component: OnePatientComponent
  },
  {
    path: 'sick-lists/:id',
    component: OneSickListComponent
  },
  {
    path: 'vet-docs/:id',
    component: OneVetDocComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
