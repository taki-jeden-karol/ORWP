import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { SickListComponent } from './sick-list/sick-list.component';
import { VetDocComponent } from './vet-doc/vet-doc.component';
import { OnePatientComponent } from './one-patient/one-patient.component';
import { OneVetDocComponent } from './one-vet-doc/one-vet-doc.component';
import { OneSickListComponent } from './one-sick-list/one-sick-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SickListComponent,
    VetDocComponent,
    OnePatientComponent,
    OneVetDocComponent,
    OneSickListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
