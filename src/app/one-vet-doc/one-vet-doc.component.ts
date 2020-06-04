import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IVetDoc } from '../vet-doc/vet-doc.model';

@Component({
  selector: 'one-vet-doc',
  templateUrl: './one-vet-doc.component.html',
  styleUrls: ['./one-vet-doc.component.css']
})
export class OneVetDocComponent implements OnInit {

  vetdoc: IVetDoc;
  id: string;
  constructor(protected http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<IVetDoc>("http://localhost:1337/vet-docs/" + this.id, {observe: "response"}).subscribe(
      (res: HttpResponse<IVetDoc>) => {
        this.vetdoc = res.body});
  }

}
