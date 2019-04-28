import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'index-all',
  templateUrl: './index.component.html',
  styles: [`
    [nz-carousel-content] {
      text-align: center;
    
      height: 450px;
      margin: 0 auto;
      background: #000;
      color: #fff;
    }
    .slick-slider{
      height:450px;
    }
  `]

})
export class IndexAllComponent implements OnInit {
  gridStyle = {
    width: '290px',
    textAlign: 'center',
    border: '0px',
    color: '#fff',
    fontSize: '18px',
    margin: '2px',
    lineHeight: '90px',
    float: 'left'
  };
  dataurl: any;
  vipcourse: any;
  excellentcourse: any;
  // freecourse: any;
  loginData: any;
  banner: any;
  suggest: any;
  constructor(
    private http: HttpClient,
    private routeInfo: ActivatedRoute,
    private router: Router,
  ) {
  }
  // courseShow(courseType, courseSize) {
  //   const free = new HttpParams().set('chargeType.in', courseType).set('size', courseSize).set('sort', "order,asc");
  //   this.http.get('/api/courses', { params: free }).subscribe(res => {
  //     this.freecourse = res;
  //   },
  //     err => {
  //       console.log(err);
  //     });
  // }
  courseExcellent(courseType, courseSize) {
    const paramses = new HttpParams().set('chargeType.in', courseType).set('size', courseSize).set('sort', "order,asc");
    this.http.get('/api/courses', { params: paramses }).subscribe(res => {
      this.excellentcourse = res;
    },
      err => {
        console.log(err);
      });
  }
  coursevip(courseType, courseSize) {
    const vip = new HttpParams().set('chargeType.in', courseType).set('size', courseSize).set('sort', "order,desc");
    this.http.get('/api/courses', { params: vip }).subscribe(res => {
      this.vipcourse = res;

    },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.suggest = [
      {
        "id": 75,
        "title": "2018.1.25 vip课程《新手必学选择天然爆款+产品分析》讲师：大鹏.mp4",
        "desc": "2018.1.25 vip课程《新手必学选择天然爆款+产品分析》讲师：大鹏.mp4",
        "content": "2018.1.25 vip课程《新手必学选择天然爆款+产品分析》讲师：大鹏.mp4",
        "studyTime": null,
        "stuNums": 3654,
        "orderNums": 23544,
        "favNums": 6586,
        "clickNums": 3223,
        "imageUrl": "1531032074849_新手必学选择天然爆款+产品分析.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-08T06:41:16Z",
        "price": null,
        "order": null,
        "lecturer": "大鹏",
        "type": {
          "id": 20,
          "name": "选款测款",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 163,
        "title": "2018.4.10 vip课《黄金标题打造与提高搜索权重 》讲师：大鹏老师.mp4",
        "desc": "2018.4.10 vip课《黄金标题打造与提高搜索权重 》讲师：大鹏老师.mp4",
        "content": "2018.4.10 vip课《黄金标题打造与提高搜索权重 》讲师：大鹏老师.mp4",
        "studyTime": null,
        "stuNums": 48744,
        "orderNums": 59895,
        "favNums": 45979,
        "clickNums": 47894,
        "imageUrl": "1531191986972_黄金标题打造与提高搜索权重.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-10T03:06:27Z",
        "price": null,
        "order": null,
        "lecturer": "大鹏老师",
        "type": {
          "id": 17,
          "name": "标题优化",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 70,
        "title": "2017.6.3vip课程《店铺和单品权重爬升路径，自然搜索就这么做》讲师：雷老师.mp4",
        "desc": "2017.6.3vip课程《店铺和单品权重爬升路径，自然搜索就这么做》讲师：雷老师.mp4",
        "content": "2017.6.3vip课程《店铺和单品权重爬升路径，自然搜索就这么做》讲师：雷老师.mp4",
        "studyTime": null,
        "stuNums": 6356,
        "orderNums": 6644,
        "favNums": 4654,
        "clickNums": 3265,
        "imageUrl": "1531029030928_店铺和单品权重爬升路径，自然搜索就这么做.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-08T05:46:49Z",
        "price": null,
        "order": null,
        "lecturer": "雷老师",
        "type": {
          "id": 28,
          "name": "权重提升",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 162,
        "title": "2018.3.8 VIP课程《高点击率主图策划和卖点提炼》讲师：大鹏.mp4",
        "desc": "2018.3.8 VIP课程《高点击率主图策划和卖点提炼》讲师：大鹏.mp4",
        "content": "2018.3.8 VIP课程《高点击率主图策划和卖点提炼》讲师：大鹏.mp4",
        "studyTime": null,
        "stuNums": 26584,
        "orderNums": 52686,
        "favNums": 59689,
        "clickNums": 65987,
        "imageUrl": "1531191920576_高点击率主图策划和卖点提炼.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-10T03:05:20Z",
        "price": null,
        "order": null,
        "lecturer": "大鹏",
        "type": {
          "id": 23,
          "name": "主图策划",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 160,
        "title": "2018.3.31vip课《玩转新版神笔提升宝贝转化（纯实操）》讲师：雪美.mp4",
        "desc": "2018.3.31vip课《玩转新版神笔提升宝贝转化（纯实操）》讲师：雪美.mp4",
        "content": "2018.3.31vip课《玩转新版神笔提升宝贝转化（纯实操）》讲师：雪美.mp4",
        "studyTime": null,
        "stuNums": 21665,
        "orderNums": 26562,
        "favNums": 26568,
        "clickNums": 56864,
        "imageUrl": "1531191744026_玩转新版神笔提升宝贝转化（纯实操）.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-10T03:02:25Z",
        "price": null,
        "order": null,
        "lecturer": "雪美",
        "type": {
          "id": 24,
          "name": "其他",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 103,
        "title": "2017.10.26 VIP课程《从小白到运营大神系列课程-店铺诊断与数据分析》讲师：大鹏.mp4",
        "desc": "2017.10.26 VIP课程《从小白到运营大神系列课程-店铺诊断与数据分析》讲师：大鹏.mp4",
        "content": "2017.10.26 VIP课程《从小白到运营大神系列课程-店铺诊断与数据分析》讲师：大鹏.mp4",
        "studyTime": null,
        "stuNums": 13564,
        "orderNums": 23465,
        "favNums": 9789,
        "clickNums": 46496,
        "imageUrl": "1531121830805_从小白到运营大神系列课程-店铺诊断与数据分析.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-09T07:36:26Z",
        "price": null,
        "order": null,
        "lecturer": "大鹏.",
        "type": {
          "id": 24,
          "name": "其他",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 82,
        "title": "2018.5.19vip课程《三步教你用手机拍出高转化率主图视频》讲师-范范.mp4",
        "desc": "2018.5.19vip课程《三步教你用手机拍出高转化率主图视频》讲师-范范.mp4",
        "content": "2018.5.19vip课程《三步教你用手机拍出高转化率主图视频》讲师-范范.mp4",
        "studyTime": null,
        "stuNums": 5956,
        "orderNums": 9598,
        "favNums": 9655,
        "clickNums": 5787,
        "imageUrl": "1531033693428_三步教你用手机拍出高转化率主图视频.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-08T07:08:06Z",
        "price": null,
        "order": null,
        "lecturer": "范范",
        "type": {
          "id": 23,
          "name": "主图策划",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      },
      {
        "id": 78,
        "title": "2018.06.21 vip课程《直通车打造爆款思路+实操》讲师：浩南老师.mp4",
        "desc": "2018.06.21 vip课程《直通车打造爆款思路+实操》讲师：浩南老师.mp4",
        "content": "2018.06.21 vip课程《直通车打造爆款思路+实操》讲师：浩南老师.mp4",
        "studyTime": null,
        "stuNums": 35532,
        "orderNums": 36441,
        "favNums": 6665,
        "clickNums": 6544,
        "imageUrl": "1531032877220_直通车打造爆款思路+实操.jpg",
        "chargeType": "VIP",
        "isLive": false,
        "createTime": "2018-07-08T06:54:20Z",
        "price": null,
        "order": null,
        "lecturer": "浩南",
        "type": {
          "id": 19,
          "name": "直通车",
          "parent": null
        },
        "collectionId": null,
        "collected": null
      }
    ]
    this.http.get('/api/banners').subscribe(res => {
      this. banner = res;
    }, err => {
      console.log(err);
    });
    // this.courseShow('FREE', 8);
    this.courseExcellent('VIP', 6);
    this.coursevip('VIP', 6);

    // let headers = new Headers({ 'Authorization': });

    this.routeInfo.queryParams.subscribe((params) => {
      this.dataurl = params;
      console.log(777)
      console.log( this.dataurl)
      if (this.dataurl.code) {
        localStorage.setItem('token', 'Bearer' + ' ' + this.dataurl.code);
        this.http.get('/api/account').subscribe(res => {
          this.loginData = res;
          if (this.loginData.login == null) {
            this.router.navigate(['register']);
          }
        },
          err => {
            console.log(err);
          });
      }
    });

    
  }
}
