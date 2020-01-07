import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseover') onmouserover() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onmouserleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
