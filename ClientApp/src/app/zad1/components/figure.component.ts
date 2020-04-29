import { Component, OnInit, Output } from "@angular/core";
import { Figure } from "../models/figure.model";

@Component({
    selector: "figure-component",
    templateUrl: "figure.component.html"
})
export class FigureComponent implements OnInit
{
    // Dynamic component size scaling (80% Height, 75% Width)
    private innerWidth: number;
    private innerHeight: number;

    // User selected figure
    private selectedFigure: Figure;

    // Displays the surface area or incorrect format message
    private message: string;

    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 4/5 * window.innerHeight;
        this.innerWidth = 3/4 * window.innerWidth;
    }

    // Triggered by ListComponent.selectFigure() when selecting any figure
    //  Location: list.component.ts
    // Assigns selected figure based on parameter
    // Resets the message block
    getFigure(figure:Figure):void
    {
        this.selectedFigure = figure;
        this.message = "";
    }

    // Triggered after submitting the format string
    // Matches the input with the template
    //    IF matching, calculate the surface area and display message with the result
    //    ELSE display error message
    readFormatstring(formatstring:string):void
    {
        if(this.selectedFigure.matchFormatString(formatstring))
        {
            let surfacearea:number = this.selectedFigure.calcsurfacearea(formatstring);
            this.message = "Surface area of selected " + this.selectedFigure.name + " is: " + surfacearea;
        }
        else
            this.message = "Incorrect format. Check your input and retry."
    }
}