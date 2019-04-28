import {
  Component,
  HostBinding,
  ViewEncapsulation,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,

} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'header-search',
  encapsulation: ViewEncapsulation.None,
  template: `
  <nz-input-group class="header-search_inner" nzAddOnBeforeIcon="anticon anticon-search">
    <input nz-input [(ngModel)]="q" [placeholder]="'请输入要查找的课程内容' | translate" (ngModelChange) = 'search()'>
  </nz-input-group>
  `,
})
export class HeaderSearchComponent implements OnInit, AfterViewInit {
  q: '';
  change: any;
  qIpt: HTMLInputElement;
  searchctn: any;

  @HostBinding('class.header-search__focus') focus = false;

  @HostBinding('class.header-search__toggled') searchToggled = false;

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') return;
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => this.qIpt.focus(), 300);
  }

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.qIpt = (this.el.nativeElement as HTMLElement).querySelector(
      '.ant-input',
    ) as HTMLInputElement;
  }

  search() {
    this.change = this.router.url;
    if (this.q == '') {
      return false;
    }else if (this.change.indexOf('searchshow') !== -1) {
        // const courseSelect = new HttpParams().set('title.contains', this.q );
        // this.http.get('/api/courses', { params: courseSelect }).subscribe(res => {
        //     this.searchctn = res;
        //     console.log('000');
        //     console.log(this.searchctn);
        //   },
        //   err => {
        //     console.log(err);
        //   });
      this.router.navigate(['searchshow'], {queryParams: {keyword: this.q}});
      setTimeout(() => this.q, 300);
      console.log('000');
      }else {
        this.router.navigate(['searchshow'], {queryParams: {keyword: this.q}});
        setTimeout(() => this.q, 300);
      }

  }

}
