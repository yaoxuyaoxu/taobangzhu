import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import { CourseDetailComponent } from '../../../routes/courseDetail.component';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'Course',
  template: `
    <div style="float: left;" *ngFor="let cnt of course">
      <a [routerLink] = "['/CourseDetail']" [queryParams]="{id:cnt.id}" target="_blank">
      <!--<a (click)="courseconnect(cnt.id)">-->
        <nz-card nzHoverable style="width:280px;display: inline-block; margin: 5px!important;" [nzCover]="coverTemplate">
          <nz-card-meta nzTitle="{{cnt.title}} " nzDescription="{{cnt.clickNums}}人已看过" ></nz-card-meta>
          <p class="courseType_free">{{translate(cnt.chargeType)}}</p>
        </nz-card>
        <ng-template #coverTemplate>
          <img src="http://116.62.58.151:8080/youboleAdmin/{{cnt.imageUrl}}" alt="example" width="280" height="158"/>
        </ng-template>
      </a>
    </div>
  `,
})
export class CourseComponent implements OnInit {
  translated: any;
  @Input() course;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }
  courseconnect(index) {
   this.router.navigate(['CourseDetail'], {queryParams: {id: index}});
  }
  translate(ChargeType) {
    if ( ChargeType == 'FREE') {
      return '免费课程';
    }else if( ChargeType == 'PAY') {
      return '精品课程';
    }else {
      return 'VIP课程';
    }
  }

  ngOnInit() {

  }

}
