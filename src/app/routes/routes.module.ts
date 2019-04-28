import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
// import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';

import { Exception403Component} from "./exception/403.component";
import {Exception500Component} from "./exception/500.component";
import {Exception404Component} from "./exception/404.component";

import { IndexAllComponent} from './index/index.component';
import { AboutUsComponent} from './AboutUs/AboutUs.component';
import { BannerRightComponent} from './index/banner/bannerRight_login.component';
import { paidCourseComponent} from './index/sidebar/paidCourse.component';
import { SidebarComponent } from './index/sidebar/sidebar.component';
import { CourseComponent } from '../layout/default/course/course.component';
import { DaysComponent } from '../layout/default/course/days.component';
import { CourseCenterComponent} from './CourseCenter/CourseCenter.component';
import { OfflineCommunicationComponent } from './OfflineCommunication/OfflineCommunication.component';
import { AfterclassTestComponent} from './AfterclassTest/AfterclassTest.component';
import { ExcellentCourseComponent } from './ExcellentCourse/ExcellentCourse.component';
import { PersonalComponent } from './personal/personal.component';
import { SearchshowComponent} from '../layout/default/header/components/searchshow.component';
import { LoginComponent } from '../layout/default/login/login.component';
import { RegistComponent } from '../layout/default/login/regist.component';
import { CourseDetailComponent } from './courseDetail.component';
import { StudyMapComponent } from './studyMap/studyMap.component';
import { StudyResourseComponent } from './studyResourse/studyResourse.component';
import { DetailStudyComponent} from './studyResourse/detail_study.component';


const COMPONENTS = [
  DashboardV1Component,
  // DashboardAnalysisComponent,
  DashboardMonitorComponent,
  DashboardWorkplaceComponent,
  Exception403Component,
  Exception404Component,
  Exception500Component,
  IndexAllComponent,
  AboutUsComponent,
  BannerRightComponent,
  CourseComponent,
  DaysComponent,
  ExcellentCourseComponent,
  paidCourseComponent,
  SidebarComponent,
  CourseCenterComponent,
  OfflineCommunicationComponent,
  AfterclassTestComponent,
  PersonalComponent,
  SearchshowComponent,
  LoginComponent,
  RegistComponent,
  CourseDetailComponent,
  StudyMapComponent,
  StudyResourseComponent,
  DetailStudyComponent,
];
const COMPONENTS_NOROUNT = [];


@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT

})
export class RoutesModule {}
