import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";

@Component ({
  selector : 'ExcellentCourse',
  templateUrl: './ExcellentCourse.component.html',
  styleUrls: ['./ExcellentCourse.component.less'],
})

export class ExcellentCourseComponent implements OnInit {
  courseLargeData: any;
  courseData: any;
  QuestionData: any [] = [
    {
      question: '0基础能学会吗？',
      answer: '老师全天在线一对一指导，手把手实操教学，老师讲一遍，你操作一遍，老师检查一遍，反复练习，\n' +
      '直到学会为止，我们3万名学员都是0基础成为大神的。'
    },
    {
      question: '你们有免费试听课吗？我想先体验一下可以吗？',
      answer: '我们有免费课程，免费指导店铺运营，建议新手先进QQ群，领取软件，再找老师免费诊断店铺，直接找出核心问题，针对性的学习免费课程，告别盲目摸索，快速走上正轨！'
    },
    {
      question: '你们实力怎么样？有什么优势？',
      answer: '我们有超过30名讲师和100名助教，3万多名学员，vip学员调查报告显示95%店铺都在盈利，其中月利润超过1万的占80%，因此获得官方授予电商培训界“全能王”最高奖项。'
    },
    {
      question: '你们怎么带学员呢？学习之后效果怎么样？',
      answer: '白天老师一对一诊断店铺，晚上全程直播演示，你跟着老师演示一步一步操作，具体过程是：学习，练习，老师指导，测验，提升。正常情况下30天内做到日均100单以上。'
    },
    {
      question: '优伯乐是谁？做什么的？',
      answer: '我们不同于一般的加盟或者卖软件，是一家实实在在教你做运营的服务机构，也是淘宝大学在线平台合作商家，通过在线实时直播讲解，课后一对一练习指导，特点是：实操，高效，快速。'
    }
  ];

  CourseTeacherData: any [] = [
    {
      name: '雷风老师',
      job: '优伯乐电商校长',
      good: '擅长：店铺总运营规划，直通车低价引流',
      img: '../../../assets/img/gold.jpg',
      head:'../../../assets/img/JPlei.jpg'
    },
    {
      name: '大鹏老师',
      job: '优伯乐电商高级讲师',
      good: '擅长：店铺总运营规划，直通车低价引流',
      img: '../../../assets/img/silver.jpg',
      head:'../../../assets/img/JPdapeng.jpg'
    },
    {
      name: '小宇老师',
      job: '优伯乐电商高级讲师',
      good: '擅长：店铺总运营规划，直通车低价引流',
      img: '../../../assets/img/bronze.jpg',
      head:'../../../assets/img/JPxiaoyu.jpg'
    },
    {
      name: '范范老师',
      job: '优伯乐电商高级讲师',
      good: '擅长：店铺总运营规划，直通车低价引流',
      img: '../../../assets/img/bronze.jpg',
      head:'../../../assets/img/JPfanfan.jpg'
    }
  ]
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }
  courseconnect(index){
    this.router.navigate(['CourseDetail'], {queryParams: {id: index}});
  }
  ngOnInit() {
    this.http.get('/api/courses').subscribe(res => {
        this.courseLargeData = res;
      },
      err => {
        console.log(err);
      });

    const courseSelect = new HttpParams().set('chargeType.in', 'PAY').set('size', '4' );
    this.http.get('/api/courses', { params: courseSelect }).subscribe(res => {
        this.courseData = res;
      },
      err => {
        console.log(err);
      });
  }
}

