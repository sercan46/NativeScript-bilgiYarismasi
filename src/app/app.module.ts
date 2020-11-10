import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { SorularComponent } from './sorular/sorular.component';
import { HttpClientModule } from "@angular/common/http";
import { ScoreComponent } from './score/score.component';
import { NasilOyunComponent } from './nasil-oyun/nasil-oyun.component';
import { NgShadowModule } from "nativescript-ng-shadow";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NgShadowModule
    ],
    declarations: [
        AppComponent,
        AnasayfaComponent,
        SorularComponent,
        ScoreComponent,
        NasilOyunComponent
    ],
    providers: [SorularComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
