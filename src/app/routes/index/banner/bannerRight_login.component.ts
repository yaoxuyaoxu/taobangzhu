import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component ({
  selector: 'app-loginright',
  template: `
    <div class="banner_right">
      <div><img src="../../../../assets/img/taologo.jpg" style="border-radius:50%;width:130px;height:130px;display:block;margin:0 auto;"></div>
      <p class="welcome">欢迎来到淘帮主电商！</p>
      
      <div *ngIf="!logged">
        <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin" class="btnbtn-primarybtn-block banner_login" >学员登录</a>
        <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin" class="banner_login banner_logon">注册好礼<span class="new">新人专享</span> </a>
        <div class="login">
          <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin" class="QQ_login"><img src="../../../../assets/img/qqlogin.jpg"> <span>QQ登录</span></a>
          <a href="http://localhost/api/account/qq?redUrl={{CurrentUrl}}" class="QQ_login"><img src="../../../../assets/img/weixinlogin.jpg"> <span>微信登录</span></a>
        </div>
        <p class="mobile_login">
          <i class="anticon anticon-mobile"></i>
          <a target="_blank" href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin" > 手机登录  /  手机注册</a>
        </p>
      </div>
      <div *ngIf="logged">
        <p class="loginName">{{loginDataAll.nickName}}</p>
        <a class="banner_login banner_logon" (click)="logout()">退出 </a>
      </div>
    </div>
    <!--[routerLink]="['/register']"-->
    
  `,
  styles: [`
    :host ::ng-deep .ant-avatar {
      display: block;
      margin:16px auto 0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      font-size: 50px;
      font-weight: bold;
      line-height: 80px;
    }
    .loginName{
      text-align: center;
      font-size: 20px;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .banner_login{
      display: block;
      width: 178px;
      height: 42px;
      margin: 12px auto 0;
      border: 1px solid #ff7e00;
      font-size: 18px;
      line-height: 42px;
      text-align: center;
      border-radius: 5px;
    }
  `]
})
export class BannerRightComponent implements OnInit{
  logged: boolean;
  loginDataAll: any;
  CurrentUrl: any;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  logout() {
    localStorage.removeItem('token');
    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
      if (this.loginDataAll.login == 'anonymoususer'){
        this.logged = false;
      }else {
        this.logged = true;
      }
    });
    this.router.navigate(['index']);
  }
  ngOnInit() {

    this.CurrentUrl = encodeURI(window.location.href);
    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
      if (this.loginDataAll.login == 'anonymoususer') {
        this.logged = false;
      }else {
        this.logged = true;
      }
    });

    this.router.navigate(['index']);
  }
}
