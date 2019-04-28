import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'StudyMap',
  templateUrl: './studyMap.component.html',
  styles: [`
    .studyMapbanner{
      width: 1200px;
      height: 409px;
      margin: 0 auto;
      background: url("../../../assets/img/studyMapBanner.jpg") no-repeat center top;
    }
    .studyMapbanner_w{
      width: 100%;
      height: 409px;
      margin-top: 64px;
      background: url("../../../assets/img/studyMapBanner_W.jpg") no-repeat center top;
    }
    .studyMap_Title{
      width: 1200px;
      margin: 90px auto 56px;
      text-align: center;
      font-size: 34px;
      color: #525252;
      background: url("../../../assets/img/studyMap_titlelogo.jpg") no-repeat 250px center;
    }
    .studyMap_Videobg{
      width: 1200px;
      height: 750px;
      margin: 0 auto;
      background: url("../../../assets/img/StudyMap_Video.jpg") no-repeat center top;
    }
    .studyMap_Earn{
      background: url("../../../assets/img/studyMap_earn.jpg") no-repeat 394px center;
    }
    .styduMap_course{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    .styduMap_courseLeft{
      width: 850px;
      float: left;
    }
    .styduMap_courseLeftTitle{
      color: #5c5c5c;
      font-size: 30px;
      border-bottom: 1px solid #f1f1f1;
      overflow: hidden;
    }
   
    .styduMap_courseRight{
      float: left;
      background: #f5f5f5;
      width: 350px;
      font-size: 24px;
    }
    .studyMap_Tags{
      overflow: hidden;
      list-style: none;
      padding: 0;
    }
    .studyMap_Tags li{
      float: left;
      font-size: 16px;
      padding: 0 14px;
      margin: 7px 6px;
      line-height: 38px;
      background: #e6e6e6;
    }
    .studyMap_Tags li:hover{
      background: #f76e24;
    }
    .studyMap_Tags li:hover a{
      color: #fff;
    }
    .studyMap_Tags li a{
      color: #737373;
    }
  `]
})
export class StudyMapComponent implements OnInit {
  StudyEffect: any;
  PhotoShop: any;
  CourseDayone: any;
  lessonDaysVideo: any;
  lessonDaysVideotwo: any;
  lessonDaysVideothree: any;
  lessonDaysVideofour: any;
  lessonDaysVideofive: any;
  lessonDaysVideosix: any;
  lessonDaysVideoseven: any;
  lessonDaysVideoeight: any;
  lessonDaysVideonine: any;
  lessonDaysVideoten: any;
  lessonDaysVideoeleven: any;
  lessonDaysVideotwelve: any;
  lessonDaysVideothirteen: any;
  lessonDaysVideofourteen: any;

  @Input() days;
  constructor(
    private http: HttpClient,
  ) {

  }
  // dayone(WhichDay){
  //   this.http.get('/api/courses/' + WhichDay).subscribe(res => {
  //     this.CourseDayone = res;
  //     console.log(11121)
  //     console.log(this.CourseDayone)

  //   },
  //   err => {
  //     console.log(err);
  //   });

  //   const lessonSelect = new HttpParams().set('courseId.equals', WhichDay).set('sort', 'sequence,asc');
  //   this.http.get('/api/lessons/', { params: lessonSelect }).subscribe(res => {
  //       this.lessonDaysVideo = res;
  //       console.log(11122)
  //       console.log(this.lessonDaysVideo)
  //     },
  //     err => {
  //       console.log(err);
  //     });
  // }
  ngOnInit() {
    const lessonSelect = new HttpParams().set('courseId.equals', '221').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: lessonSelect }).subscribe(res => {
      this.lessonDaysVideo = res;
    },
      err => {
        console.log(err);
      });
    const daytwo = new HttpParams().set('courseId.equals', '222').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daytwo }).subscribe(res => {
      this.lessonDaysVideotwo = res;
    },
      err => {
        console.log(err);
      });
    const daythree = new HttpParams().set('courseId.equals', '223').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daythree }).subscribe(res => {
      this.lessonDaysVideothree = res;
    },
      err => {
        console.log(err);
      });
    const dayfour = new HttpParams().set('courseId.equals', '224').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayfour }).subscribe(res => {
      this.lessonDaysVideofour = res;
    },
      err => {
        console.log(err);
      });
    const dayfive = new HttpParams().set('courseId.equals', '225').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayfive }).subscribe(res => {
      this.lessonDaysVideofive = res;
    },
      err => {
        console.log(err);
      });
    const daysix = new HttpParams().set('courseId.equals', '226').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daysix }).subscribe(res => {
      this.lessonDaysVideosix = res;
    },
      err => {
        console.log(err);
      });
    const dayseven = new HttpParams().set('courseId.equals', '227').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayseven }).subscribe(res => {
      this.lessonDaysVideoseven = res;
    },
      err => {
        console.log(err);
      });
    const dayeight = new HttpParams().set('courseId.equals', '228').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayeight }).subscribe(res => {
      this.lessonDaysVideoeight = res;
    },
      err => {
        console.log(err);
      });
    const daynine = new HttpParams().set('courseId.equals', '229').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daynine }).subscribe(res => {
      this.lessonDaysVideonine = res;
    },
      err => {
        console.log(err);
      });
    const dayten = new HttpParams().set('courseId.equals', '230').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayten }).subscribe(res => {
      this.lessonDaysVideoten = res;
    },
      err => {
        console.log(err);
      });
    const dayeleven = new HttpParams().set('courseId.equals', '231').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: dayeleven }).subscribe(res => {
      this.lessonDaysVideoeleven = res;
    },
      err => {
        console.log(err);
      });
    const daytwelve = new HttpParams().set('courseId.equals', '232').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daytwelve }).subscribe(res => {
      this.lessonDaysVideotwelve = res;
    },
      err => {
        console.log(err);
      });
    const daythirteen = new HttpParams().set('courseId.equals', '233').set('sort', 'sequence,asc');
    this.http.get('/api/lessons/', { params: daythirteen }).subscribe(res => {
      this.lessonDaysVideothirteen = res;
    },
      err => {
        console.log(err);
      });

    const meigong = new HttpParams().set('courseId.equals', '42').set('sort', 'sequence,asc').set('size', '20');
    this.http.get('/api/lessons/', { params: meigong }).subscribe(res => {
      this.PhotoShop = res;
    },
      err => {
        console.log(err);
      });

    // this.http.get('/api/courses/' + 42).subscribe(res => {
    //   this.dayOne = res;
    //   console.log(12541254)
    //   console.log(this.dayOne)


    // },
    //   err => {
    //     console.log(err);
    //   });
  }
  //   {
  //     day: '1',
  //     content: '瞄准正确方向',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=221'
  //   },
  //   {
  //     day: '2',
  //     content: '搜索原理和爆款路径',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=222'
  //   },
  //   {
  //     day: '3',
  //     content: '狠字诀打法',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=223'
  //   },
  //   {
  //     day: '4',
  //     content: ' 标题优化',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=224'
  //   },
  //   {
  //     day: '5',
  //     content: '主图制作及点击率测试',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=225'
  //   },
  //   {
  //     day: '6',
  //     content: '直通车基础入门',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=226'
  //   },
  //   {
  //     day: '7',
  //     content: '直通5大目的实现',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=227'
  //   },
  //   {
  //     day: '8',
  //     content: '店铺营销设置',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=228'
  //   },
  //   {
  //     day: '9',
  //     content: '淘客及达人推广',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=229'
  //   },
  //   {
  //     day: '10',
  //     content: '转化率提升',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=230'
  //   },
  //   {
  //     day: '11',
  //     content: '竖屏策划',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=231'
  //   },
  //   {
  //     day: '12',
  //     content: '数据分析',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=232'
  //   },
  //   {
  //     day: '13',
  //     content: '短视频策划及制作',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=233'
  //   },
  //   {
  //     day: '14',
  //     content: '美工',
  //     url: 'http://taobaojy.com/#/CourseDetail?id=234'
  //   },
  // ];
}

