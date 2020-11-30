import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersistenceModule } from 'angular-persistence';
import { ModalModule } from './components/_modal';

import { AppComponent } from './components/app/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { OllAlgsComponent } from './components/oll-algs/oll-algs.component';
import { PllAlgsComponent } from './components/pll-algs/pll-algs.component';
import { PllAlgDetailsComponent } from './components/pll-alg-details/pll-alg-details.component';
import { OllAlgDetailsComponent } from './components/oll-alg-details/oll-alg-details.component';
import { ModalComponent } from './components/_modal/modal.component';
import { ScrambleComponent } from './components/scramble/scramble.component';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PersistenceModule,
    ModalModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      // for testing
      { path: 'timer', component: TimerComponent },
      { path: 'scramble', component: ScrambleComponent },
      { path: 'ollAlgs', component: OllAlgsComponent },
      { path: 'pllAlgs', component: PllAlgsComponent },
      { path: 'ollAlgs/:name', component: OllAlgDetailsComponent },
      { path: 'pllAlgs/:name', component: PllAlgDetailsComponent }
    ])
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    OllAlgsComponent,
    OllAlgDetailsComponent,
    PllAlgsComponent,
    PllAlgDetailsComponent,
    ScrambleComponent,
    TimerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
