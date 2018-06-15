import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template:
  `
  <h2>{{ title }}</h2>
  `
  ,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

@Input() title: string;
// @Output() parentNotified = new EventEmitter<string>();
// title = "I'm a nested component";

  constructor() { }

  ngOnInit() {
  }

 


}
