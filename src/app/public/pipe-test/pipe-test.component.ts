import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PublisherDto, PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent implements OnInit {

  publishers: Observable<PublisherDto[]>;

  someNumber = 100;
  constructor(private publishersService: PublishersService) { }

  ngOnInit(): void {
    this.publishers = this.publishersService.getPublishers();  
  }
  doNothing() {}

  

}
