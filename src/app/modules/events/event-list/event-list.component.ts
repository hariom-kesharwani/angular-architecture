import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private EventService: EventService) { }

  ngOnInit() {
    this.getEventlist();
  }

  getEventlist(){
    
    let params= {
      property_id:12
    }
    //Calling Event list service to fetch records from api
    this.EventService.getEventsList(params).subscribe((res) => {
      console.log(res);
      //Logic to use API data
    });
  }

}
