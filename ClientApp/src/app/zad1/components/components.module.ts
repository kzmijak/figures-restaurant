import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommissionInfo1 } from "./commissioninfo.component";
import { Zad1 } from "./zad1.component";
import { FigureComponent } from "./figure.component";
import { ListComponent } from "./list.component";

@NgModule({
    declarations:[
        CommissionInfo1,
        Zad1, 
        FigureComponent,
        ListComponent
    ],
    imports: [BrowserModule, RouterModule, FormsModule]
})
export class ComponentsModule1{}