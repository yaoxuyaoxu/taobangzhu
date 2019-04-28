import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
// dashboard pages
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';

import { IndexAllComponent} from './index/index.component';
import { AboutUsComponent} from './AboutUs/AboutUs.component';
import { ExcellentCourseComponent } from './ExcellentCourse/ExcellentCourse.component';
import { CourseCenterComponent } from './CourseCenter/CourseCenter.component';
import { OfflineCommunicationComponent } from './OfflineCommunication/OfflineCommunication.component';
import { AfterclassTestComponent } from './AfterclassTest/AfterclassTest.component';
import { PersonalComponent } from './personal/personal.component';
import { SearchshowComponent } from '../layout/default/header/components/searchshow.component';
import { LoginComponent } from '../layout/default/login/login.component';
import { RegistComponent } from '../layout/default/login/regist.component';
import { CourseDetailComponent } from './courseDetail.component';
import { StudyMapComponent } from './studyMap/studyMap.component';
import { StudyResourseComponent } from './studyResourse/studyResourse.component';
import { DetailStudyComponent} from './studyResourse/detail_study.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      { path: 'index', component: IndexAllComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'CourseCenter', component: CourseCenterComponent },
      { path: 'ExcellentCourse', component: ExcellentCourseComponent },
      { path: 'OfflineCommunication', component: OfflineCommunicationComponent },
      { path: 'AfterTest', component: AfterclassTestComponent },
      { path: 'Personal', component: PersonalComponent },
      { path: 'searchshow', component: SearchshowComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistComponent },
      { path: 'CourseDetail', component: CourseDetailComponent },
      // { path: 'dashboard/monitor', component: DashboardMonitorComponent },
      // { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
      { path: 'StudyMap', component: StudyMapComponent },
      { path: 'StudyResourse', component: StudyResourseComponent },
      { path: 'DetailStudy', component: DetailStudyComponent },
    ],
  },
  // 全屏布局
  {
    path: 'data-v',
    component: LayoutFullScreenComponent,
    children: [
      { path: '', loadChildren: './data-v/data-v.module#DataVModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
