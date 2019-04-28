import { Component } from '@angular/core';
@Component({
  selector: 'aboutUs',
  templateUrl: './AboutUs.component.html',
  styles: [`
    .white{
      color: #fff !important;
    }
    .aboutUs_banner_w{
      background: url("../../../assets/img/aboutusbannerw.jpg") no-repeat center top;
      margin-top: 64px;
    }
    .aboutUs_banner{
      width: 1200px;
      height: 482px;
      margin: 0 auto;
      background: url("../../../assets/img/aboutusbannerm.jpg") no-repeat center top;
    }
    .aboutUs_bannerTitle{
      font-size: 64px;
      line-height: 166px;
      color: #fff;
      text-align: center;
    }
    .aboutUs_banner_content{
      width: 800px;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-size: 18px;
      line-height: 28px;
    }
    .aboutUs_bannerBtn{
      display: block;
      text-align: center;
      font-size: 20px;
      padding-top: 38px;
    }
    .aboutUs_videoTitle{
      padding-top: 28px;
      text-align: center;
      font-size: 40px;
      line-height: 60px;
    }
    .orange{
      color: #ff7e00;
    }
    .line{
      display: block;
      width: 66px;
      height: 3px;
      background: #777;
      margin: 0 auto;
    }
    .aboutUs_videoW{
      background: #fff;
    }
    .aboutUs_video{
      width: 976px;
      margin: 0 auto;
      overflow: hidden;
    }
    .aboutUs_videobtm {
      float: left;
      width: 50%;
      padding-left: 78px;
      margin: 30px 0;
    }
    .aboutUs_videobtm:nth-of-type(1){
      background: url("../../../assets/img/aboutusvideol.jpg") no-repeat center left;
    }
    .aboutUs_videobtm:nth-of-type(2){
      background: url("../../../assets/img/aboutusvideor.jpg") no-repeat center left;
    }
    .aboutUs_videoT{
      font-size: 20px;
      line-height: 30px;
      color: #333;
    }
    .aboutUs_videoC{
      font-size: 14px;
      line-height: 22px;
      color: #666;
    }
    .aboutUs_teacherSub{
      display: block;
      font-size: 24px;
      color: #666;
    }
    .aboutUs_teacherM{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    .aboutUs_teachersingle{
      width: 274px;
      float: left;
      margin: 0 10px;
    }
    .aboutUs_teachersingle p{
      text-align: center;
    }
    .aboutUs_teachersingle:nth-of-type(1){
      background: url("../../../assets/img/aboutusteacher1.jpg") no-repeat center top;
    }
    .aboutUs_teachersingle:nth-of-type(2){
      background: url("../../../assets/img/aboutusteacher2.jpg") no-repeat center top;
    }
    .aboutUs_teachersingle:nth-of-type(3){
      background: url("../../../assets/img/aboutusteacher3.jpg") no-repeat center top;
    }
    .aboutUs_teachersingle:nth-of-type(4){
      background: url("../../../assets/img/aboutusteacher4.jpg") no-repeat center top;
    }
    .aboutUs_teacherCtop{
      padding-top: 480px;
    }
    .aboutUs_teacherT{
      padding-bottom: 25px;
      font-size: 24px;
      color: #666;
      background: url("../../../assets/img/aboutus_icon.jpg") no-repeat bottom center;
    }
    .aboutUs_teacherC{
      color: #a1a1a1;
      font-size: 16px;
    }
    .aboutUs_serviceW{
      background: #3d3c3c;
    }
    .aboutUs_serviceM{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
    .aboutUs_serveSingle{
      float: left;
      overflow: hidden;
      width: 50%;
      margin-bottom: 40px;
    }
    .aboutUs_leftcircle{
      float: left;
      width: 100px;
      height: 100px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
    .aboutUs_leftcnt{
      width: 50px;
      margin: 0 auto;
      padding-top: 10px;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
    .aboutUs_rightcircle{
      float: left;
      color: #fff;
      padding-left: 10px;
    }
    .aboutUs_rightTitle{
      font-size: 20px;
      margin: 0;
    }
    .aboutUs_rightCnt{
      font-size: 18px;
    }
    .aboutUs_ybl{
      width: 1200px;
      margin: 0 auto 25px;
      overflow: hidden;
    }
    .aboutUs_yblL , .aboutUs_yblR{
      width: 48%;
      padding: 2%;
      float: left;
    }
    .aboutUs_yblR{
      vertical-align: top;
    }
    .aboutUs_yblL p:nth-child(1){
      font-size: 20px;
      line-height: 30px;
      color: #999;
      text-indent: 2em;
    }
    .aboutUs_yblL p:nth-child(1) span{
      color: #ff7800;
       font-size: 38px;
     }
    .aboutUs_yblL p:nth-child(2){
      font-size: 30px;
      font-weight: bold;
      padding: 0 1.5em;
      margin-bottom: 0;
      color: #666;
    }
    .aboutUs_yblL p:nth-child(3){
      padding: 0 1.5em;
      margin-bottom: 0;
      color: #999;
      font-size: 20px;
      line-height: 30px;
    }
    .aboutUs_yblL p:nth-child(3) span{
      display: block;
      color: #d7a95b;
      font-size: 40px;
      font-family: "宋体";
    }
    .aboutUs_yblL p:nth-child(4){
      text-align: right;
      color: #999;
      font-size: 20px;
      line-height: 80px;
      padding-right: 100px;
      background: url("../../../assets/img/leifeng.jpg") no-repeat center right;
    }
    .aboutUs_advantageSingle{
      float: left;
      margin: 0 6px;
      height: 440px;
      overflow: hidden;
    }
    .aboutUs_environment{
      float: left;
      margin: 50px 10px;
    }
  `]
})
export class AboutUsComponent {
  advantageData: any[] = [
    {
      img: '../../../assets/img/aboutUsadvantage1.jpg',
      title: '一对一指导',
      content : '老师讲一遍，你操作一遍，老师检查一遍，反复练习，直到学会为止，我们3万名学员都是0基础成为大神的。'
    },
    {
      img: '../../../assets/img/aboutUsadvantage2.jpg',
      title: '手把手教学',
      content : '因为老师尽心尽责，手把手教学VIP学员调查报告显示95%店铺都在盈利，其中月利润超过1万的占80%。'
    },
    {
      img: '../../../assets/img/aboutUsadvantage3.jpg',
      title: '全程直播演示',
      content : '白天一对一指导，晚上全程直播授课。具体方式是四个一遍：老师讲一遍，操作一遍， 你跟着做一遍，老师再给你检查一遍，直到学会为止。'
    }
  ];
  environmentData: any[] = [
    {
      img: '../../../../assets/img/aboutUsenvironment1.jpg'
    },
    {
      img: '../../../../assets/img/aboutUsenvironment2.jpg'
    },
    {
      img: '../../../../assets/img/aboutUsenvironment3.jpg'
    },
    {
      img: '../../../../assets/img/aboutUsenvironment4.jpg'
    },
    {
      img: '../../../../assets/img/aboutUsenvironment5.jpg'
    }
  ]
  todoData: any[] = [
    {
      name: '关于授课',
      content: `每周二、四、六晚8-10现场VIP授课`,
      subcontent: `全程实操 全程直播 手机 电脑同步看`,
    },
    {
      name: '关于福利',
      content: `开往电脑必备的所有软件等权限`,
      subcontent: `享有免费实用`,
    },
    {
      name: '关于交流',
      content: `与所有VIP学员一起学习交流`,
      subcontent: `积累人脉 累积精英`,
    },
    {
      name: '关于案例',
      content: `聆听优秀学员经验分享`,
      subcontent: `月利润3-5万学员分享实操`,
    },
    {
      name: '关于指导',
      content: `白天一对一指导，晚上在线直播授课`,
      subcontent: `赠送价值500元一对一店铺交流诊断`,
    },
    {
      name: '关于疑惑',
      content: `随时随地学、想问就问`,
      subcontent: `拥有老师的联系方式`,
    }
    ];
}
