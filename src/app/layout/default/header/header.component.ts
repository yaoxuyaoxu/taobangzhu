import { Component, ViewChild, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  
  `]


})
export class HeaderComponent implements OnInit {
  searchToggleStatus: boolean;
  loginDataAll: any;
  private data: object;
  constructor(
    public settings: SettingsService,
    private routeInfo: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    ) {

  }

  toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
  ngOnInit() {
    // this.router.navigate(['searchshow', 1], {queryParams: {id: 1}});
// this.routeInfo.queryParams.subscribe(params = > {
//   this.data = params;
// })
    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
    });
  }

}

