import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'coursedetail',
  template: `
    <div class="video_main">
      <div class="videoContent">
        <div class="videoL">
          <div style="position: relative;" *ngIf="tabImg" (click)="lessonShow(coursedata.data||lessonVideo[0].id)">
            <div class="play">
                <i class="anticon anticon-play-circle "></i>
            </div>
            <img src="http://116.62.58.151:8080/youboleAdmin/{{ CourseVideo&& CourseVideo.imageUrl}}" alt="" width="100%" height="100%">
          </div>
          <div *ngIf="tabVideo">
            <video src="{{lessonPlay}}" width="100%" height="100%" controls="true" controlslist="nodownload" autoplay="autoplay" (contextmenu)="nomenu($event)">
            </video>
          </div>
          <div style="overflow: hidden;background: #26262b; color: #999;">
            <div class="Num">
                学习人数：{{CourseVideo&& CourseVideo.clickNums}}人 
            </div>
            <div (click)="collect()" style="display: inline-block; padding: 5px 10px; border-radius: 5px; background: #444; float: right;margin: 5px 20px;cursor:pointer;" *ngIf="Onoff">
              <i class="anticon anticon-heart" style="color: #999"></i>收藏
            </div>
            <div (click)="delateCollect()" style="display: inline-block; padding: 5px 10px; border-radius: 5px; background: #444; float: right;margin: 5px 20px;cursor:pointer;" *ngIf="check">
              <i class="anticon anticon-check" style="color: #999"></i>已收藏
            </div>
          </div>
        </div>
        <div class="videoR">
          <div style="overflow: hidden">
            <div style="float: left; border-radius: 50%; overflow: hidden; margin-left: 10px;">
              <img src="../../assets/img/taologo.jpg" alt="" style="width:70px;height:70px;">
            </div>
            <div style="float: left">
              <p>课程类型</p>
              <p>{{translate(CourseVideo && CourseVideo.chargeType)}}</p>
            </div>
          </div>
          <p class="catalog">课程目录 <i></i></p>
          <ul class="CourseList">
            <li *ngFor="let lessonList of lessonVideo" (click)="lessonShow(lessonList.id)">
            <div>
              <span class="keshi">课时</span>
              <span class="test" *ngIf="lessonList && lessonList.type == 'FREE'&& CourseVideo && CourseVideo.chargeType != 'FREE'">试看</span>
              {{lessonList.title}}
            </div>
            <div class="VideoTime">视频时长：{{lessonList.duration}}</div>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="below">
      <div class="belowLeft">
        <p class="StudentEvaluate belowLine">学员评价 </p>
        <p style="font-size: 18px; text-align: center; color: #575757;">留下你对本节课的评价吧！</p>
        <div class="example-input">
          <textarea placeholder="请输入你想说的话...." nz-input row="10"  [(ngModel)]="inputValue" (input)="onInput($event.target?.value)" [nzAutocomplete]="auto"></textarea>
          <nz-autocomplete #auto>
            <nz-auto-option *ngFor="let option of options" [nzValue]="option">{{option}}</nz-auto-option>
          </nz-autocomplete>
          <button class="submitComment" (click)="Submission(inputValue,CourseVideo)">提交</button>
        </div>

        <h4 class="belowLine">全部评论</h4>
        <div class="evaluateSingle belowLine" *ngFor="let commentSingle of comment">
        <div class="left">
          <nz-avatar nzText="U" style="color:#f56a00; background-color:#fde3cf;font-size:30px; font-weight:bold;line-height:50px;margin: 10px 10px 0 0; width:50px; height:50px; border-radius:50%;"></nz-avatar>
        </div>
        <div class="left">
          <h5 class="userName">{{commentSingle.owner.nickName}}</h5>
          <p class="userComment">{{commentSingle.content}}</p>
          </div>
        </div>
      </div>
      <div class="belowRight">
        <div class="Recommend belowLine">推荐课程</div>
        <div style="padding: 20px 0">
          <a target="_blank" (click)="changeCourse()">
            <Course [course]=" vipcourse"></Course>
          </a>
        </div>
      </div>
    </div>
    <div class="alertlog" *ngIf="Unlog">
      <div class="zhezhao">
        <div class="alert">
          <p>您还没有登录，请先注册或登录</p>
          <div class="btnContainer">
            <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin">立即登录</a>
            <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin">立即注册</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
  textarea.ant-input{
    min-height: 100px;
  }
  .left{
    float:left
  }
  .video_main{
    margin-top: 70px;
    background: #222;
    color: #fff;
  }
    .videoContent{
      width: 100%;
      overflow: hidden;
    }
    .videoL{
      width: 80%;
      float: left;
    }
    .videoR{
      width: 19%;
      float: left;
      vertical-align: top;
      padding-top: 16px;
      background: #333;
    }
    .videoR p{
      padding-left: 12px;
    }
    .videoR p:nth-child(2){
      font-size: 30px;
      color: #ffcc00;
    }
    .catalog{
      font-size: 18px;
      line-height: 48px;
      background: #2a2a2a;
      padding-left: 28px !important;
      position: relative;
    }
    .catalog i{
      display: inline-block;
      width: 96px;
      height: 2px;
      background: #ffcc00;
      position: absolute;
      bottom: 0;
      left: 25px;
    }
    .below{
      width: 1200px;
      margin: 20px auto 0;
      overflow: hidden;
    }
    .belowLeft{
      float: left;
      width: 870px;
      padding-right: 70px;
    }
    .belowLeft h4{
    font-size: 18px;
  }
    .belowLine{
    border-bottom: 1px solid #e1e1e1;
    }
    .belowRight{
      width: 300px;
      float: left;
      vertical-align: top;
    }
    .submitComment{
      display: block;
      margin: 10px auto 0;
      font-size: 18px;
      line-height: 36px;
      width: 100px;
      text-align: center;
    }
    .play{
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 70px;
      margin-left: -35px;
      margin-top: -35px;
    }
    .StudentEvaluate{
      color: #f69702;
      font-size: 16px;
    }
    .StudentEvaluate:after{
      content: '';
      display: block;
      width: 76px;
      height: 2px;
      background: #f69702;
    }
    .userComment{
      margin: 20px 0 ;
    }
    .userName{
      font-size: 16px;
    }
    .evaluateSingle{
      overflow: hidden;
    }
    .Num{
      float: left;
      line-height: 40px;
      padding-left: 10px;
    }
    .CourseList{
      margin: 0;
      padding: 0;
      max-height: 500px;
      overflow-y: scroll;
    }
    .CourseList li{
      cursor: pointer;
      padding : 0 40px;
      height: 65px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .CourseList li:hover{
      background: #666;
    }
    .CourseList li div{
      line-height: 1.5;
    }
    .Recommend{
      font-size: 16px;
    }
    .test{
      display: inline-block;
      padding: 0 10px;
      font-size: 12px;
      line-height: 18px;
      background: #f76e24;
      border-radius: 10px;
      margin-right: 10px;
    }
    .VideoTime{
      line-height: 1.5;
    }
    .alert{
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -150px;
      margin-top: -50px;
      width: 300px;
      height: 100px;
      background: #fff;
      border-radius: 10px;
    }
    .zhezhao{
      width: 100%;
      height:100%;
      position: fixed;
      left: 0;
      top: 0;
      background: rgba(0,0,0,0.5);
    }
    .alert p{
      margin-top: 15px;
      font-size: 18px;
      text-align: center;
    }
    .alert a{
      display: block;
      float: left;
      width: 70px;
      line-height: 2;
      text-align: center;
    }
    .btnContainer{
      width:140px;
      margin: 0 auto;
    }
  `],
})
export class CourseDetailComponent implements OnInit {
  CourseVideo: any;
  coursedata: any;
  lessonVideo: any;
  lessonPlay: any;
  vipcourse: any;
  comment: any;
  lessonCurent: any;
  ChargeTypes: any;
  loginDataAll: any;
  tabImg: boolean;
  tabVideo: boolean;
  submit: any;
  collection: any;
  deleteCollection: any;
  UserColection: any;
  Onoff: boolean;
  check: boolean;
  test: boolean;
  Unlog: boolean = false;

  inputValue: string;
  options = [];
  onInput(value: string): void {
    this.options = value ? [
      value,
      value + value,
      value + value + value,
    ] : [];
  }

  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) { }

  lessonShow(lesson) {
    this.tabImg = false;
    this.tabVideo = true;
    this.http.get('/api/lessons/' + lesson).subscribe(res => {
      this.lessonCurent = res; 
      console.log(258)
      console.log(lesson)
      if (this.loginDataAll.login == 'anonymoususer') {
        this.Unlog = true;
        this.lessonPlay = null;
        console.log(0)
        console.log(0)
        return false;
      }else if (this.loginDataAll.authorities[0] == ['ROLE_USER'] && this.lessonCurent.type !== 'FREE') {
        alert('您只能观看免费课程');
      console.log(1)
      console.log(1)
        this.lessonPlay = null;
        return false;
      }else if (this.loginDataAll.authorities[0] == 'ROLE_COURSE' && this.lessonCurent.type !== 'FREE' && this.lessonCurent.course.chargeType == 'VIP') {
        alert('您没有权限观看VIP课程');
        console.log(2)
        console.log(2)
        this.lessonPlay = null;
        return false;
      }    
    },
    err => {
      console.log(err);
    });
    this.http.get('/api/lessons/' + lesson + '/video', { responseType: 'text' }).subscribe(res => {
      this.lessonPlay = res;
      console.log(258)
      console.log(this.lessonCurent.type)
      if (this.loginDataAll.login == 'anonymoususer') {
        this.Unlog = true;
        this.lessonPlay = null;
        console.log(0)
        console.log(0)
        return false;
      }else if (this.loginDataAll.authorities[0] == ['ROLE_USER'] && this.lessonCurent.type !== 'FREE') {
        alert('您只能观看免费课程');
      console.log(1)
      console.log(1)
        this.lessonPlay = null;
        return false;
      }else if (this.loginDataAll.authorities[0] == 'ROLE_COURSE' && this.lessonCurent.type !== 'FREE' && this.lessonCurent.course.chargeType == 'VIP') {
        alert('您没有权限观看VIP课程');
        console.log(2)
        console.log(2)
        this.lessonPlay = null;
        return false;
      }
          console.log(321)
    },
    err => {
      console.log(1478963);
    });
    // if (this.loginDataAll.login == 'anonymoususer') {
    //   this.Unlog = true;
    //   this.lessonPlay = null;
    //   console.log(0)
    //   console.log(0)
    //   return false;
    // }else if (this.loginDataAll.authorities[0] == ['ROLE_USER'] && this.lessonCurent.type !== 'FREE') {
    //   alert('您只能观看免费课程');
    // console.log(1)
    // console.log(1)
    // console.log( this.lessonPlay)
    //   this.lessonPlay = null;
    //   return false;
    // }else if (this.loginDataAll.authorities[0] == 'ROLE_COURSE' && this.lessonCurent.type !== 'FREE' && this.lessonCurent.course.chargeType == 'VIP') {
    //   alert('您没有权限观看VIP课程');
    //   console.log(2)
    //   console.log(2)
    //   this.lessonPlay = null;
    //   return false;
    // }else{
      // this.http.get('/api/lessons/' + lesson + '/video', { responseType: 'text' }).subscribe(res => {
      //   this.lessonPlay = res;
      //   console.log(321)
      // });
      
    // }
    
  }

  collect() {
    this.http.post('/api/collections/', {
      'course': {
        'id': this.coursedata.id
      }
    }).subscribe(res => {
        this.collection = res;
        this.Onoff = false;
        this.check = true;
      },
      err => {
        console.log(err);
      });
  }

  delateCollect() {
    this.http.get('/api/courses/' + this.coursedata.id + '/unCollect').subscribe(res => {
        this.deleteCollection = res;
        this.Onoff = true;
        this.check = false;
        alert('取消收藏成功');
      },
      err => {
        console.log(err);
      });
  }
  changeCourse() {
    this.tabImg = true;
    this.tabVideo = false;
    this.routeInfo.queryParams.subscribe((params) => {
      this.coursedata = params;
    });
    this.http.get('/api/courses/' + this.coursedata.id).subscribe(res => {
        this.CourseVideo = res;

      },
      err => {
        console.log(err);
      });

    const lessonSelect = new HttpParams().set('courseId.equals', this.coursedata.id).set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: lessonSelect }).subscribe(res => {
        this.lessonVideo = res;
      },
      err => {
        console.log(err);
      });

      const CommentDetail = new HttpParams().set('courseId.equals', this.coursedata.id);
      this.http.get('/api/comments/', { params: CommentDetail }).subscribe(res => {
        this.comment = res;
      },
        err => {
          console.log(err);
        });
  }

  coursevip(courseType, courseSize) {
    const vip = new HttpParams().set('chargeType.in', courseType).set('size', courseSize);
    this.http.get('/api/courses', { params: vip }).subscribe(res => {
      this.vipcourse = res;
    },
      err => {
        console.log(err);
      });
  }

  translate(ChargeType) {
    // console.log(ChargeType)
    if ( ChargeType == 'FREE') {
      return '免费课程';
    }else if ( ChargeType == 'PAY') {
      return '精品课程';
    }else {
      return 'VIP课程';
    }
  }
  Submission(Ccontent, course) {
    if(Ccontent == undefined) {
      alert('您似乎没有评论任何内容')
      return false
    };
    this.http.post('/api/comments' ,
      {
        'content' : Ccontent,
        'course'  : course
      }).subscribe(res => {
        this.submit = res;
        alert('提交成功') ;
        Ccontent = '';
      },
      err => {
        console.log(err);
      });
  }

  nomenu(event){
    // 主要是这个事件了，阻止默认右键菜单的弹出
    event.preventDefault();
  }
  ngOnInit() {
    this.tabImg = true;
    this.tabVideo = false;

    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
    });

    this.coursevip('VIP', 6);
    this.routeInfo.queryParams.subscribe((params) => {
      this.coursedata = params;
    });

    this.http.get('/api/courses/' + this.coursedata.id).subscribe(res => {
      this.CourseVideo = res;

      if (this.CourseVideo.collected) {
        this.Onoff = false;
        this.check = true;
      }else {
        this.Onoff = true;
        this.check = false;
      }
    },
      err => {
        console.log(err);
      });

    const lessonSelect = new HttpParams().set('courseId.equals', this.coursedata.id).set('sort', 'sequence,asc').set('size', '100');
    this.http.get('/api/lessons/', { params: lessonSelect }).subscribe(res => {
      this.lessonVideo = res;
      console.log(res)
    },
      err => {
        console.log(err);
      });

    const CommentDetail = new HttpParams().set('courseId.equals', this.coursedata.id);
    this.http.get('/api/comments/', { params: CommentDetail }).subscribe(res => {
      this.comment = res;
    },
      err => {
        console.log(err);
      });
  }
}

