import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage = 'Welcome to NiteLyfe! Plan your night by searching for restaurants, bars, and nightclubs in your area!';

  constructor() { }

  ngOnInit() {
  }

}
