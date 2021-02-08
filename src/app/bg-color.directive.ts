import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="#e7e6e1"
   }
    
}
