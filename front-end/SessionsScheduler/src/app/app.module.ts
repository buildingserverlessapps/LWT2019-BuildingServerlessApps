import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LimitToPipe } from './limit-to.pipe';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SessionsListComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
