import { Directive, ElementRef, Input, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[cnButton]'
})
export class ButtonDirective implements OnInit {

 @HostListener('mouseenter') onMouseEnter() {
  this.addClass('btn-focus');
 }

 @HostListener('mouseleave') onMouseLeave() {
  this.renderer.removeClass(this.elementRef.nativeElement, 'btn-focus');
 }

  @Input() defaultColor: string = 'primary';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.addClass(`btn-${this.defaultColor}`);
  }

  private addClass(className: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, className);
  }
}
