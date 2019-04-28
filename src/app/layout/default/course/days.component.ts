import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import { CourseDetailComponent } from '../../../routes/courseDetail.component';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'daysfourteen',
  template: `
  <ul class="styduMap_courseLeftList">
    <li *ngFor = "let dayOne of days">
        <a [routerLink] = "['/CourseDetail']" [queryParams]="{'id':dayOne.course.id, 'data':dayOne.id}" target="_blank">
            <div class="lesson"></div>
            <div class="styduMap_courseContent">
                <span class="circle"></span>
                <p style="float: left; width: 500px; font-size:18px;color:#595959;"><i class="anticon anticon-video-camera styduMap_courseFont"></i>{{dayOne.title}}</p>
                <a class="styduMap_WatchVideo"><i class="anticon anticon-play-circle-o"></i> 观看视频</a>
            </div>
        </a>
    </li>
  </ul>
  `,
  styles:[
      `
      .lesson{
        float: left;
        font-size: 18px;
        width: 60px;
      }
      .styduMap_courseLeftList{
        list-style: none;
        padding-left: 10px;
      }
      .styduMap_courseLeftList li{
        border-bottom: 1px solid #f1f1f1;
        line-height: 76px;
        overflow: hidden;
      }
      .styduMap_courseContent{
        float: left;
        height: 76px;
        border-left: 1px solid #ffc000;
        position: relative;
        margin-left: 50px;
        padding-left: 50px;
      }
      .circle{
        display: block;
        width: 16px;
        height: 16px;
        position: absolute;
        left: -8px;
        top: 50%;
        margin-top: -8px;
        border: 1px solid #ffc000;
        border-radius: 50%;
        background: #fff;
      }
      .styduMap_WatchVideo{
        display: block;
        width: 150px;
        line-height: 30px;
        float: right;
        border: 1px solid #f76e24;
        color: #f76e24;
        text-align: center;
        margin-top: 20px;
      }
      .styduMap_courseFont{
        padding-right: 20px;
      }
      .styduMap_WatchVideo:hover{
        background: #f76e24;
        color: #fff;
      }

      `
  ]
})
export class DaysComponent implements OnInit {
  @Input() days;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  ngOnInit() {

  }

}
