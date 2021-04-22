import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultiService } from 'src/app/services/multi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  specialMessage: string;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private multiService: MultiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.specialMessage = params['message'] || "nothing special"
    );
    this.route.paramMap.subscribe(
      map => this.id = map.get('id')
    );
  }

}
