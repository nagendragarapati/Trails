import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
declare const vanish:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home : {
    title: String,
    target: String,
    details: String
  };
  callfun(){
  vanish();
  }

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.home=this.getHome();
  }

getHome(){
  return this.config.getConfig().home;
}
}
