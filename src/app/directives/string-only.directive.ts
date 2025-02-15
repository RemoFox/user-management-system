import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appStringOnly]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting:StringOnlyDirective,
      multi: true
    }
  ]
})
export class StringOnlyDirective implements Validator {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    let inputValue = this.el.nativeElement.value;
    console.log(this.el.nativeElement.value)
    this.el.nativeElement.value = inputValue.replace(/[^A-Za-z\s]/g, '');
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    console.log(value)
    if (!value) return null;

    const  isValid = /^[A-Za-z\s]+$/.test(value);
    return isValid ? null : { stringOnly: true };
  }
}

