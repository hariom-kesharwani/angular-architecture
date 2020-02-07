import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './modules/events/events.module';
import { UsersModule } from './modules/users/users.module';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { ErrorInterceptor } from './helpers/error.interceptor'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    UsersModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
