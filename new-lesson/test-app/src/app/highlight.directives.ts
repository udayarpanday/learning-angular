import { Directive,ElementRef,HostListener } from "@angular/core";

@Directive({
  selector:'[appHigh]'

})

export class HighlightDirective{
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight("yellow")
  }
  @HostListener('mouseenter') onMouseLeave(){
    this.highlight("yellow")
  }
  constructor( private el:ElementRef){
    el.nativeElement.style.backgroundColor='yellow'
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color
  }
}
