import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {
  servers = [
    { name: "croydon1258", id: 1 },
    { name: "tokyo5128", id: 2 },
    { name: "newyork2732", id: 3 }
  ];
  message: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.route.paramMap.subscribe(map => {
        console.log(map);
        this.message = "Viewing " + map.get('type') + " events";
      });
  }

}
