import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as utils from "tns-core-modules/utils/utils";
import * as SocialShare from "nativescript-social-share";
import Theme from "@nativescript/theme";
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";
import { exit } from "nativescript-exit";

@Component({
    selector: "ns-anasayfa",
    templateUrl: "./anasayfa.component.html",
    styleUrls: ["./anasayfa.component.css"],
})
export class AnasayfaComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}
    sorular() {
        console.log("aa");
        this.router.navigate(["sorular"]);
    }
    score() {
        this.router.navigate(["score"]);
    }
    nasilOynanir() {
        this.router.navigate(["nasil-oyun"]);
    }
    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked; // boolean
    }
    mailGonder() {
        var openApp = require("nativescript-open-app").openApp;
        var utils = require("utils/utils");

        var installed = openApp("com.google.android.gm", false);

        if (!installed) {
            utils.openUrl("com.google.android.gm");
        }
    }
    logOut() {
        exit(); // will close application
    }
    takipEt() {
        utils.openUrl("https://www.instagram.com/sercanozbek/");
    }
    paylas() {
        SocialShare.shareUrl("https://www.sercanozbek.com/", "Sercan Özbek");
    }
    changeMode() {
        console.log("console.girdi");
        console.log("thieme", Theme.getMode());
        Theme.setMode(
            Theme.getMode() === Theme.Light ? Theme.Dark : Theme.Light
        );
    }
}
