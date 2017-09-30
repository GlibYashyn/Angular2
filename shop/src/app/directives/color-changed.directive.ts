import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanged]',
})
export class ColorChangedDirective {

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') 
  mouseenter(){
    if (this.el.style.color == "blue"){
      this.el.style.color = "inherit";
    } else {
      this.el.style.color = "blue";
    }
  }
}
