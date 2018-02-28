import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {AuthGuard} from './guard/authguard';
import {AauthGuard} from './guard/aauthguard';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { GettokenService } from './services/gettoken.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SocialComponent } from './social/social.component';
import {ValidateService} from './services/validate.service';

import {AuthService} from './services/auth.service'
import {FlashMessagesModule} from 'angular2-flash-messages';
import { QuestionsComponent } from './questions/questions.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
//import { AdminregisterComponent } from './adminregister/adminregister.component';
import { LoadComponent } from './load/load.component';
import { DemoComponent } from './demo/demo.component';
//added
import {AboutComponent} from './about/about.component';
import { BooksService } from './services/books.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestpageComponent } from './homescreen/testpage/testpage.component';
import { SubdomComponent } from './homescreen/subdom/subdom.component';
import { TestComponent } from './homescreen/test/test.component';
import { FilterStrPipe } from './homescreen/filter-str.pipe';
import { ChartComponent } from './homescreen/chart/chart.component';

import { AnalysisComponent } from './homescreen/analysis/analysis.component';
import { LandingComponent } from './homescreen/landing/landing.component';
//again
import { AdminComponent } from './admin/admin.component';
 import { AddAssessmentComponent } from './admin/add-assessment/add-assessment.component';
 import { UpdateAssessmentComponent } from './admin/update-assessment/update-assessment.component';
 import {SubmodulesComponent} from './admin/submodules/submodules.component';
import {UpdateSubmodulesComponent} from './admin/submodules/update-submodules/update-submodules.component';
import {AddSubmodulesComponent} from './admin/submodules/add-submodules/add-submodules.component';
import {ParametersComponent} from './admin/submodules/parameters/parameters.component';
import {AddParametersComponent} from './admin/submodules/parameters/add-parameters/add-parameters.component';
import {UpdateParametersComponent} from './admin/submodules/parameters/update-parameters/update-parameters.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component'
import { AssessmentsService } from './services/assessments-service';
import { NameFilterPipe } from './services/name-filter.pipe';
import { SubmodulesFilterPipe } from './services/submodules-filter.pipe';
import { ParametersFilterPipe } from './services/ParametersFilter.pipe';

import { CuppaOAuthModule } from './cuppaOAuth/cuppaOAuth.module';
import {AdminService} from './services/admin.services';
import {AdminDashboardComponent} from'./admin/admin-dashboard.component';
import { AuthServiced }from './cuppaOAuth/auth.service';
const appRoutes:Routes =[
  {path:'',component:HomeComponent},
   {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
  //   {path:'adminregister',component:AdminregisterComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'social',component:SocialComponent},
    {path:'questions',component:QuestionsComponent},
    {path:'demo',component:DemoComponent},
    //added
    { path: 'explore/:id/:id_id',component: TestComponent,canActivate:[AuthGuard]},
  { path: 'explore/:id',component: SubdomComponent,canActivate:[AuthGuard]},
  { path: 'analysis/:id',component: ChartComponent,canActivate:[AuthGuard]},
  { path: 'analysis',component: AnalysisComponent,canActivate:[AuthGuard]},
  { path: 'explore', component: TestpageComponent,canActivate:[AuthGuard] },
   { path: 'about', component: AboutComponent ,canActivate:[AuthGuard]},
    { path: 'landing', component: LandingComponent },
    {path:'adc',component:AdminDashboardComponent},



    // {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
     //again
      //{path:'profile',component:ProfileComponent,canActivate:[AuthGuard]}
       { path: 'admin-home/admin/addAssessment', component: AddAssessmentComponent,canActivate:[AauthGuard]},
  { path: 'admin-home/admin/updateAssessment/:subject', component: UpdateAssessmentComponent,canActivate:[AauthGuard]},
   { path: 'admin-home', component: AdminHomeComponent,canActivate:[AauthGuard] },
  { path: 'admin-home/admin/:subject/:sub/:param/:weight/update/:scoreRemaining', component: UpdateParametersComponent,canActivate:[AauthGuard]},  
   { path: 'admin-home/admin/:subject/:sub/addparameters/:scoreRemaining', component: AddParametersComponent,canActivate:[AauthGuard]},
   { path: 'admin-home/admin/:subject/addsubmodule', component: AddSubmodulesComponent,canActivate:[AauthGuard]},
   { path: 'admin-home/admin/:subject/:sub', component: ParametersComponent,canActivate:[AauthGuard]},
   { path: 'admin-home/admin/:subject/:sub/update', component: UpdateSubmodulesComponent,canActivate:[AauthGuard]},
   
   { path: 'admin-home/admin/:subject', component: SubmodulesComponent,canActivate:[AauthGuard] },
   { path: 'admin-home/admin', component: AdminComponent,canActivate:[AauthGuard]}
  
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
     SocialComponent,
    LoginComponent,
    QuestionsComponent,
    AdminloginComponent,
  //  AdminregisterComponent,
    LoadComponent,
     TestpageComponent, SubdomComponent, TestComponent,FilterStrPipe,AboutComponent, ChartComponent, AnalysisComponent, LandingComponent,
    DemoComponent,
    AdminComponent,
    SubmodulesComponent,
     UpdateSubmodulesComponent,
     ParametersComponent,
     AddSubmodulesComponent,
     AddParametersComponent,
      UpdateParametersComponent,
      AdminHomeComponent ,
      UpdateAssessmentComponent,
      AddAssessmentComponent,
      AdminDashboardComponent,
      //CuppaOAuthModule,
      NameFilterPipe,
      SubmodulesFilterPipe,
      ParametersFilterPipe 
  ],
  imports: [
    BrowserModule,
    CuppaOAuthModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService,AuthService,AuthGuard,AauthGuard,GettokenService,BooksService,AssessmentsService,AuthServiced],
  bootstrap: [AppComponent]
})
export class AppModule { }
