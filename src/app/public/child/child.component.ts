import { Component, ContentChild, OnInit } from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {


  @ContentChild(SubChildComponent) subChildComponent: SubChildComponent;

  colour = "#F00";
  constructor() { }

  ngOnInit(): void {
  }
  changeColour() {
    this.colour = "#0F0";
  }

  showSubChildMessage() {
    this.subChildComponent.showMessage();
  }

}
