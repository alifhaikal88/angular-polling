import {Input, Directive, HostListener, ElementRef, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[disableDiv]'
})
export class DisableDivDirective implements OnChanges{

  @Input('disableDiv') disabled = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:load', ['$event'])
  public disableOnLoad(event) {
    this.disableChildrenInsideDiv();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.disabled = changes['disabled'].currentValue;
    this.disableChildrenInsideDiv();
  }

  private disableChildrenInsideDiv() {
    const arr = Array.from(this.el.nativeElement.children);
    arr.forEach(e => {
      e['disabled'] = this.disabled;
    });
  }
}
