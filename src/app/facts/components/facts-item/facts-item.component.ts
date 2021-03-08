import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cn-facts-item',
  templateUrl: './facts-item.component.html',
  styleUrls: ['./facts-item.component.scss']
})
export class FactsItemComponent implements OnInit {

  @Input() fact: any;

  constructor() { }

  ngOnInit() {
  }

}
