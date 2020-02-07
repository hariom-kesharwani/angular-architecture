import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from "./event-list/event-list.component";
import { AuthGuard } from "./../../guards/auth/auth.guard"


const routes: Routes = [
  {
    path: 'portal',
    component: EventListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'events',
        children: [
            {
                path: '',
                component:  EventListComponent,
                pathMatch: 'full'
            },
            /*
            {
                path: 'details/:id',
                component: EventDetailComponent
            },
            */
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
