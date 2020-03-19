import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApparielComponent } from './appariel/appariel.component';
import { Apparielservice } from './services/appariel.service';
import { AuthComponent } from './auth/auth.component';
import { ApparielViewComponent } from './appariel-view/appariel-view.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { Authservice } from './services/auth.service';
import { SingleApparielComponent } from './single-appariel/single-appariel.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'appariels', canActivate: [AuthGuard], component: ApparielViewComponent },
  { path: 'appariels/:id', canActivate: [AuthGuard], component: SingleApparielComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: ApparielViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ApparielComponent,
    AuthComponent,
    ApparielViewComponent,
    FourOhFourComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Apparielservice,
    Authservice,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
