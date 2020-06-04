import { Component, OnInit } from '@angular/core';
import { IVetDoc } from './vet-doc.model';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'vet-doc',
  templateUrl: './vet-doc.component.html',
  styleUrls: ['./vet-doc.component.css']
})
export class VetDocComponent implements OnInit {
  vetdoc: IVetDoc[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IVetDoc[]>("http://localhost:1337/vet-docs", {observe: "response"}).subscribe(
      (res: HttpResponse<IVetDoc[]>) => {
        console.log(res.body);
        this.vetdoc = res.body}
      );
  }

}
