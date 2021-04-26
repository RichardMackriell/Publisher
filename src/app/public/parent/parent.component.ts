import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  colourOutputValue = 'orange';

  showChild = true;

  @ViewChild(ChildComponent) childComponent: ChildComponent;


  constructor() { }

  ngOnInit(): void {
  }

  changeChild() {
    this.childComponent.changeColour();
  }
  toggleShowChild() {
    this.showChild = !this.showChild;
  }
  words: string;
  onNextWord(value: string) {
    this.words = this.words + " " + value;
  }
}
