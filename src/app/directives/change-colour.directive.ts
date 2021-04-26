import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColour]'
})
export class ChangeColourDirective implements OnInit {

  @Input('style') style: string;

  @Input('colour') colour: string;

  @Input('weight') weight: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.colour ? this.colour : 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.weight ? this.weight : 100);
    console.log(this.style);
  }

}
