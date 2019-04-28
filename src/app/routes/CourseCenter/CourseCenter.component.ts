import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'CourseCenter',
  templateUrl: './CourseCenter.component.html',
  styles: [`
    .CourseCenter{
      width: 1200px;
      margin: 100px auto 0;
    }
    .CourseCenter_nav{
      width: 1200px;
      margin: 0 auto 50px;
    }
    .pagination{
      width: 580px;
      margin: 0 auto;
    }
    .ant-menu-item-selected{
      background: #ff7e00 !important;
   }
    .ant-menu-item-selected a{
      color:#fff !important;
    }
    .CourseContainer{
      overflow: hidden;
      margin-bottom: 40px;
    }
    
  `]
})
export class CourseCenterComponent implements OnInit {
  courseType: any;
  courseAll: any;
  page: any;
  pageindex: any;
  total: any;
  CourseCharge: any;
  CourseTypes: any;

  constructor(
    private http: HttpClient,
  ){
  }
  changeCourse( coursetypes, pageindex ) {
    this.page = 1;
    pageindex = 1;
    pageindex--;
    const courseSelect = new HttpParams().set('typeId.equals', coursetypes ).set('page', pageindex).set('size', '8');
    this.http.get('/api/courses', { params: courseSelect }).subscribe(res => {
        this.courseAll = res;
        this.total = this.courseAll['total'];
        this.CourseTypes = coursetypes;
      },
      err => {
        console.log(err);
      });
  }
  changeType( coursecharge, pageindex) {
    this.page = 1;
    pageindex = 1;
    pageindex--;
    const courseSelectsub = new HttpParams().set('chargeType.equals', coursecharge ).set('page', pageindex).set('size', '8');
    this.http.get('/api/courses', { params: courseSelectsub }).subscribe(res => {
        this.courseAll = res;
        this.total = res['total'];
        this.CourseCharge = coursecharge;
      },
      err => {
        console.log(err);
      });
  }
  pageChange(pageindex){
    pageindex--;
    if (this.CourseCharge == undefined && this.CourseTypes == undefined){
      const courseSelectsub = new HttpParams().set('page', pageindex).set('size', '8');
      this.http.get('/api/courses', { params: courseSelectsub }).subscribe(res => {
        this.courseAll = res;
      })
    } else if( this.CourseCharge == undefined && this.CourseTypes !== undefined){
      const courseSelectsub = new HttpParams().set('page', pageindex).set('size', '8').set('typeId.equals', this.CourseTypes );
      this.http.get('/api/courses', { params: courseSelectsub }).subscribe(res => {
        this.courseAll = res;
      })
    }else if( this.CourseTypes == undefined){
      const courseSelectsub = new HttpParams().set('page', pageindex).set('size', '8').set('chargeType.equals', this.CourseCharge );
      this.http.get('/api/courses', { params: courseSelectsub }).subscribe(res => {
        this.courseAll = res;
      })
    }
  }
  AllcourseData(){
    const courseSelectsub = new HttpParams().set('page', this.page ).set('size', '8');
    this.http.get('/api/courses', { params: courseSelectsub }).subscribe(res => {
        this.courseAll = res;
        this.total = this.courseAll['total'];
      },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.page = 0;
    this.http.get('/api/course-types').subscribe(res => {
        this.courseType = res;
      },
      err => {
        console.log(err);
      });
      this.AllcourseData()
  }
}
