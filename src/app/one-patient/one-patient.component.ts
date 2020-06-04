import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IPatient } from '../patient/patient.model';


@Component({
  selector: 'one-patient',
  templateUrl: './one-patient.component.html',
  styleUrls: ['./one-patient.component.css']
})
export class OnePatientComponent implements OnInit {

  patient: IPatient;
  id: string;

  constructor(protected http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<IPatient>("http://localhost:1337/patients/" + this.id, {observe: "response"}).subscribe(
      (res: HttpResponse<IPatient>) => {
        this.patient = res.body});
  }

  }


