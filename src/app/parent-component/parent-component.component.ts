import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  
  // @Input() title: string;
  childTitle: string = "text passed to child.";

  constructor() { }

  ngOnInit() {
  }

  onNotify(){
    console.log(this.childTitle);
  }
}
