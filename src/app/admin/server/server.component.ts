import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  servers = [
    { name: "croydon1258", id: 1 },
    { name: "tokyo5128", id: 2 },
    { name: "newyork2732", id: 3 }
  ];
  loading = false;

  server: { name: string, id: number };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap.subscribe(map => {
      this.server = this.servers.filter(s => s.id == +map.get('id'))[0];
      if(this.server) {
        this.loading = false;
      }
    }, error => console.log(error));
  }

}
