import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient.model';
import { HttpResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: IPatient[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IPatient[]>("http://localhost:1337/patients", {observe: "response"}).subscribe(
      (res: HttpResponse<IPatient[]>) => {
        console.log(res.body);
        this.patients = res.body}
      );
  }

}
