import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[upperCaseText]'
})

export class UpperCaseTextDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('keyup', ['$event']) onKeyUp(key: KeyboardEvent) {
   this.convertUpperCase(key);
  }
  convertUpperCase(keyEvent: KeyboardEvent) {
    const upperCaseTxt = this.el.nativeElement.value.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'value', upperCaseTxt);
  }

}
