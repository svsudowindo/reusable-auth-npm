import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svng-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  products = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
