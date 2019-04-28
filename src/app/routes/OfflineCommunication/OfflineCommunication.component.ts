import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";


@Component({
  selector: 'Communication',
  templateUrl: './OfflineCommunication.component.html',
  styleUrls: ['./OfflineCommunication.component.less'],
})
export class OfflineCommunicationComponent implements OnInit{
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;

  CommunicateShareData: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }
  courseconnect(index){
    this.router.navigate(['CourseDetail'], {queryParams: {id: index}});
  }
  ngOnInit() {
    const studentShare = new HttpParams().set('typeId.equals', '12' ).set('size', '2');
    this.http.get('/api/courses', { params: studentShare }).subscribe(res => {
        this.CommunicateShareData = res;
      },
      err => {
        console.log(err);
      });
  }
}
