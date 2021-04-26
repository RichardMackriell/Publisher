import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers = [
    { name: "croydon1258", id: 1 },
    { name: "tokyo5128", id: 2 },
    { name: "newyork2732", id: 3 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
