import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent implements OnInit {


  hidden = true;
  constructor() { }

  ngOnInit(): void {
  }
  showMessage() {
    this.hidden = false;
  }
}
