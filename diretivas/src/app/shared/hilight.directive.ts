import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = '';
  @Input('appHilight') highlightColor: string = 'yellow';  

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
