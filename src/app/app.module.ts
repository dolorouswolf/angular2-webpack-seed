import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import "./rxjs-extensions";
import {AppComponent} from "./app.component";
import {ContentComponent} from "./content.component.ts";
import {DynamicMenu} from "./dynamic-menu/dynamic-menu.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AComponent} from "./a-component/a.component";
import {BComponent} from "./b-component/b.component";


import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./public/style.css";
import "./public/customize.css";
import "./public/table.query.css";

@NgModule({
    imports: [
        BrowserModule, CommonModule,FormsModule,
        RouterModule.forRoot([
            {
                path: '', component: ContentComponent, children: [
                {path: '', component: AComponent},
                {path: 'b', component: BComponent},
            ]
            }
        ])
    ],
    declarations: [
        AppComponent,
        ContentComponent,
        HeaderComponent,
        FooterComponent,
        DynamicMenu,
        AComponent,
        BComponent
    ],
    providers: [{
        provide: LocationStrategy, useClass: HashLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {

}
