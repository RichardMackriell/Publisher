import { Component, OnInit } from '@angular/core';
import { MultiService } from 'src/app/services/multi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private multiService: MultiService) { }

  ngOnInit(): void {
    
  }

}
