import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { TextonlyDirective } from './directives/textonly.directive';
import { CustomDatePipe } from './custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    TextonlyDirective,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
