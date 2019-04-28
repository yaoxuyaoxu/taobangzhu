import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'header-nav',
  template: `
    <ul nz-menu [nzMode]="'horizontal'" class="top_nav">
      <li nz-menu-item><a *ngIf="!logged" target="_blank" href='https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101498731&redirect_uri=http://taobangz.com:8081/api/qqlogin' class="btnbtn-primarybtn-block banner_login" [routerLinkActive]="['active']"> 登录</a></li>
      <li nz-menu-item><a *ngIf="logged" target="_blank" href='javascript:;' class="btnbtn-primarybtn-block banner_login" [routerLinkActive]="['active']"  (click)="logout()"> 退出登录</a></li>
      <li nz-menu-item> <a target="_blank" [routerLink]="['/StudyResourse']" [routerLinkActive]="['active']"> 淘宝资源</a></li>
      <li nz-menu-item>
        <nz-dropdown>
          <a nz-dropdown>
            课程中心<i class="anticon anticon-down"></i>
          </a>
          <ul nz-menu nzSelectable>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/CourseCenter']">免费课程</a>
            </li>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/CourseCenter']">VIP课程</a>
            </li>
          </ul>
        </nz-dropdown>
      </li>
      
     
    </ul>
  `,
  styles: [
    `
      
    `
  ],
})
export class HeaderNavComponent implements OnInit{
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
  }
}
