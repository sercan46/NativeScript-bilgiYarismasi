import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-nasil-oyun',
  templateUrl: './nasil-oyun.component.html',
  styleUrls: ['./nasil-oyun.component.css']
})
export class NasilOyunComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack(){
  this.routerExtensions.backToPreviousPage();
}
}
