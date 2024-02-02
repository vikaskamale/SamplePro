import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]'
})
export class TextonlyDirective {

  constructor(private el: ElementRef){}

  @HostListener('input',['$event']) onInput(event: Event): void{
    const inputElement = this.el.nativeElement as HTMLInputElement;
    const currentValue = inputElement.value;

   // allow only letters and spaces
    const sanitizedValue = currentValue.replace(/[^a-zA-Z\s]/g, '');

    if(currentValue !== sanitizedValue){
      //Update the input value if it contains invalid charecters
      inputElement.value = sanitizedValue;
    }
  }
}

