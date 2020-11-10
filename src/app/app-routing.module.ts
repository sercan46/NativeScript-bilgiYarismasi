import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AnasayfaComponent } from "./anasayfa/anasayfa.component";
import { SorularComponent } from "./sorular/sorular.component";
import { ScoreComponent } from "./score/score.component";
import { NasilOyunComponent } from "./nasil-oyun/nasil-oyun.component";

const routes: Routes = [
    { path: "", redirectTo: "/anasayfa", pathMatch: "full" },
    { path: "anasayfa", component: AnasayfaComponent },
    { path: "sorular", component: SorularComponent },
    { path: "score", component: ScoreComponent },
    { path: "nasil-oyun", component: NasilOyunComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
