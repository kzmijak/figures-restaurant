import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Circle } from "../models/circle.model";
import { Figure } from "../models/figure.model";
import { Triangle } from "../models/triangle.model";
import { Quadrangle } from "../models/quadrangle.model";
import { Rombus } from "../models/rombus.model";
import { Trapezoid } from "../models/trapezoid.model";
@Component({
    selector: 'list-component',
    templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit
{
    // receiver: figure.component.ts -> FigureComponent.getFigure()
    @Output() figureSelectedEvent = new EventEmitter();

    public innerWidth: number;
    public innerHeight: number;
    public figuresList = new Array<Figure>();
    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 4/5 * window.innerHeight;
        this.innerWidth = 1/4 * window.innerWidth;
        
        // seed the figures list
        this.figuresList.push(
            new Circle, 
            new Triangle,
            new Quadrangle,
            new Rombus,
            new Trapezoid);
    }

    // Triggered when clicking the figure button
    // select figure to display
    selectFigure(figure:Figure):void {
        this.figureSelectedEvent.emit(figure);
    }
}