import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ISickList } from '../sick-list/sick-list.model';

@Component({
  selector: 'one-sick-list',
  templateUrl: './one-sick-list.component.html',
  styleUrls: ['./one-sick-list.component.css']
})
export class OneSickListComponent implements OnInit {

  sickLists: ISickList;
  id: string;

  constructor(protected http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get<ISickList>("http://localhost:1337/sick-lists/" + this.id, {observe: "response"}).subscribe(
      (res: HttpResponse<ISickList>) => {
        this.sickLists = res.body});
  }

}
