import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app work!!!';
  url = 'http://www.google.com';
  @Input() name: string;
  price = 12345.6;
  currentDate = new Date();
  creditCard: string;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    alert(this.url);
  }

}
