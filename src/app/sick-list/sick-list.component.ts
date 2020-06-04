import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpClient} from '@angular/common/http';
import { ISickList } from './sick-list.model';

@Component({
  selector: 'sick-list',
  templateUrl: './sick-list.component.html',
  styleUrls: ['./sick-list.component.css']
})
export class SickListComponent implements OnInit {

  sickLists: ISickList[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ISickList[]>("http://localhost:1337/sick-lists", {observe: "response"}).subscribe(
      (res: HttpResponse<ISickList[]>) => {
        console.log(res.body);
        this.sickLists = res.body;
        console.log(this.sickLists);
      }
      );
  }

}
