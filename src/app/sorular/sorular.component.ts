import { Component, OnInit } from '@angular/core';
import { SorularService } from './sorular.service';
import {SetupItemViewArgs} from "nativescript-angular/directives";
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Router } from '@angular/router';
import { Observable, EventData } from 'tns-core-modules/ui/page';
import * as appSettings from 'tns-core-modules/application-settings'
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

@Component({
  selector: 'ns-sorular',
  templateUrl: './sorular.component.html',
  styleUrls: ['./sorular.component.css']
})
export class SorularComponent implements OnInit {

  constructor(private soruService:SorularService,private router:Router,private routerExtensions:RouterExtensions) {
      if(appSettings.getString("score")!=undefined){
          this.score=Number(appSettings.getString("score"))
      }
   }
  category:string;
  type:string;
  difficulty:string;
  question:string;
  correct_answer:string
  incorrect_answers:any[]=[]
  answers:any[]=[];
  secilenCevap:any;
  hakSayisi:number=5;
  pas:number=3;
  score:number=0;
  isBusy: boolean = false;
  ngOnInit() {
      this.isBusy=true
      this.sorularGöster();

  }

  onSetupItemView(args: SetupItemViewArgs) {
    args.view.context.third = (args.index % 3 === 0);
}
  randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;

  }
  sorularGöster(){
      this.soruService.fetchSoru().subscribe({
          next:(resp)=>{
              console.log("aaa",resp)
              this.category=resp.results[0]['category']
              this.type=resp.results[0]['type']
              this.difficulty=resp.results[0]['difficulty']
              this.question=resp.results[0]['question']
              this.correct_answer=resp.results[0]['correct_answer']
            this.incorrect_answers=resp.results[0]['incorrect_answers']
            this.answers=this.incorrect_answers.concat(this.correct_answer)

              console.log("difficulty",this.difficulty)

              console.log("correct_answer",this.correct_answer)
              this.randomArrayShuffle(this.answers);
              console.log("karistilmis array",this.answers)


          },
          complete:()=>{
                this.isBusy=false

          }
      })
  }
  onItemTap(args: ItemEventData){
    console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.answers[args.index]}`);
    this.secilenCevap=`${this.answers[args.index]}`
    if(this.secilenCevap==this.correct_answer)
    {
        if(this.difficulty=="easy"){
            this.score=this.score+5
        }
        if(this.difficulty=="medium"){
            this.score=this.score+10
        }
        if(this.difficulty=="hard"){
            this.score=this.score+25
        }
        console.log("score",this.score)
        appSettings.setString("score",""+this.score);
        this.sorularGöster();

    }
    else{
        this.hakSayisi=this.hakSayisi-1
        if(this.hakSayisi==0)
        {
            dialogs.alert({
                title: "Hakkınız Bitti!",
                message: "Tekrarndan Deneyiniz",
                okButtonText: "Tamam"
            }).then(() => {
                this.router.navigate(['anasayfa'])
                appSettings.setString("score",""+0);
            });
        }
    }

  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
  pasDus(){
      this.pas=this.pas-1;
      this.sorularGöster();

  }
}
