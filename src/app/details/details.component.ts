import { Component, OnInit } from '@angular/core';
declare const come:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  backfun(){
    come();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
