import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './services/event.service';


@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
