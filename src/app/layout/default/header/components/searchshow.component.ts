import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'searchshow',
 template: `
   <div style=" width:1200px; margin: 70px auto 0; overflow: hidden;" > 
      <Course [course]="searchctn"></Course>
   </div>`,
  styles: [`
  `]
})
export class SearchshowComponent implements OnInit {
  private data: any;
  searchctn: any;
  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    ) { }

    searchShow() {
      this.routeInfo.queryParams.subscribe((params) => {
        this.data = params;
      });
          this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
              const courseSelect = new HttpParams().set('title.contains', this.data.keyword );
              this.http.get('/api/courses', { params: courseSelect }).subscribe(res => {
                this.searchctn = res;
          });
        },
        err => {
          console.log(err);
        });
    }

  ngOnInit() {
    this.searchShow();
  }
}
