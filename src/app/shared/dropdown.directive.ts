import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class Dropowndirective{

@HostBinding('class.open') isOpen: boolean = false;

@HostListener('document:click', ['$event']) toggleDrop(event: Event) {
    this.isOpen = this.elref.nativeElement.contains(event.target) ? !this.isOpen : false;
}

constructor(private elref: ElementRef){}
}
