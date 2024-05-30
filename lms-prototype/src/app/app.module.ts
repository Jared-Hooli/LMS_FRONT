import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAssignedCoursesComponent } from './view-assigned-courses/view-assigned-courses.component';
import { LaunchCoursesComponent } from './launch-courses/launch-courses.component';
import { LaunchCourseEvaluationComponent } from './launch-course-evaluation/launch-course-evaluation.component';
import { ViewBadgesComponent } from './view-badges/view-badges.component';
import { ViewTrainingReportComponent } from './view-training-report/view-training-report.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewAssignedCoursesComponent,
    LaunchCoursesComponent,
    LaunchCourseEvaluationComponent,
    ViewBadgesComponent,
    ViewTrainingReportComponent,
    ViewNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
