import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Zad2 } from "./zad2.component";
import { CommissionInfo2 } from "src/app/zad2/components/commissioninfo.component";
import { Tables } from "./tables.component";
import { Properties } from "./properties.component";
import { CheatSheet } from "./cheatsheet.component";

@NgModule({
    declarations:[
        CommissionInfo2,
        Zad2,
        Tables,
        Properties,
        CheatSheet
    ],
    imports: [BrowserModule, RouterModule, FormsModule]
})
export class ComponentsModule2{}