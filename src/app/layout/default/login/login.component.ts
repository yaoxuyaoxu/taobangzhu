import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { User} from './user-module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  template: `
      <div style="margin-top:200px;font-size:24px;">
        <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101483316&amp;redirect_uri=http://118.24.41.60/api/qqlogin&amp;state=test" style="text-align:center;">点击登录</a>
      </div>
  `,
  styles: [`
  
  `]
})
export class LoginComponent implements OnInit {
  public user: User;
  public error: Error;
  UserData: any;
  Login: any;
  constructor(
    public router: Router,
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  
  // public doLogin(): void {
  //   console.log(this.user);
  //   this.userLoginService.login(this.user);
  // }

  // public doLogout(): void {
  //   // this.userLoginService.logout();
  //   // this.router.navigateByUrl("home");
  // }
  //
  // public forgetPwd(): void {
  //   // this.router.navigateByUrl("forgetpwd");
  }
}
