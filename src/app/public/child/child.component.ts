import { Component, ContentChild, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { SubChildComponent } from '../sub-child/sub-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Output() nextWordEvent = new EventEmitter<string>();

  @ContentChild(SubChildComponent) subChildComponent: SubChildComponent;

  colour = "#F00";

  counter = 0;
  readonly words: string[] = ["Hello", "Further", "Angular", "Class", "It's", "Monday", ":("];


  constructor() { }

  ngOnInit(): void {
    console.log("Child init");
  }
  ngOnDestroy(): void {
    console.log("Child destroy");
  }
  changeColour() {
    this.colour = "#0F0";
  }

  showSubChildMessage() {
    this.subChildComponent.showMessage();
  }
  emitAndProgress() {
    this.nextWordEvent.emit(this.words[this.counter]);
    this.counter++;
  }

}
