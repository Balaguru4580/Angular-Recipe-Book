import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-headcomp',
  templateUrl: './headcomp.component.html',
  styleUrls: ['./headcomp.component.css']
})
export class HeadcompComponent implements OnInit {

  @Output() togglevent = new EventEmitter<string>();

  collapsed: boolean;
  toggle(mode: string)
  {
    this.togglevent.emit(mode);
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
