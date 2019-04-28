import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'date'
})
@Component({
  selector: 'personal',
  templateUrl: './personal.component.html',
  styleUrls: [`./personal.component.less`]
})
export class PersonalComponent implements OnInit {
  ShouldLearn: any;
  Recently: any;
  MyInfo: any;
  transVIP: any;
  StartLearn: any;
  FinishLearn: any;
  MyColection: any;
  MyComment: any;
  Vip: boolean;
  Member: boolean;
  Ordinary: boolean;
  // collecting: [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // const collect = new HttpParams().set('courseId.equals', this.MyColection.id);
    this.http.get('/api/collections').subscribe(res => {
        this.MyColection = res;
        // for (var i = 0; i < this.MyColection.length; i++){
        //  const collecting = this.MyColection[i].course;
        //
        // }
      },
      err => {
        console.log(err);
      });

    this.http.get('/api/comments/me').subscribe(res => {
      this.MyComment = res;
    },
    err => {
      console.log(err);
    });

    const vip = new HttpParams().set('chargeType.in', 'VIP').set('size', '8');
    this.http.get('/api/courses',  { params: vip }).subscribe(res => {
        this.ShouldLearn = res;
      },
      err => {
        console.log(err);
      });

    const recent = new HttpParams().set('top', '8');
    this.http.get('/api/user-records/my',  { params: recent }).subscribe(res => {
        this.Recently = res;
      },
      err => {
        console.log(err);
      });

    this.http.get('/api/account', ).subscribe(res => {
        this.MyInfo = res;
        console.log(this.MyInfo)
        if (this.MyInfo.authorities == 'ROLE_VIP') {
          this.Vip = true;
          this.transVIP = 'VIP学员';
        }
        if(this.MyInfo.authorities == 'ROLE_COURSE') {
          this.Member = true;
          this.transVIP = '精品课学员';
        }
        if(this.MyInfo.authorities == 'ROLE_USER') {
          this.Ordinary = true;
          this.transVIP = '普通学员';
        }
        this.StartLearn = this.MyInfo.createdDate;
        this.FinishLearn = this.MyInfo.expireDate;
      },
      err => {
        console.log(err);
      });

  }

}
