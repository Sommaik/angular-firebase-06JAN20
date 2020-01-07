import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  data: string[] = ['One', 'Two', 'Three', 'Four'];

  constructor() { }

  ngOnInit() {
  }

}
