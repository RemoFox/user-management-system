import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLetterOnly]'
})
export class LetterOnlyDirective {


  constructor(ele:ElementRef) { }
@HostListener('keydown',['$event'])

onkeydown(event:KeyboardEvent){
const key=event.key
const regex = /^[a-z A-Z]*$/
if(!regex.test(key)){
  event.preventDefault()
}
}
}


