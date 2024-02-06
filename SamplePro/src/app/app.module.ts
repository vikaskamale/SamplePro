import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { TextonlyDirective } from './directives/textonly.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { TitlecasePipe } from './pipes/titlecase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    TextonlyDirective,
    ReversePipe,
    TitlecasePipe,
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
