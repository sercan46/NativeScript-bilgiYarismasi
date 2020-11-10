import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SorularComponent } from '../sorular/sorular.component';

@Component({
  selector: 'ns-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private scoreService:SorularComponent) { }
    scoreGoster:any;
    @Output() myEvent = new EventEmitter();

  ngOnInit() {
      console.log("tasdasd",this.myEvent.emit)
      //  this.scoreGoster=this.scoreService()
  }

}
