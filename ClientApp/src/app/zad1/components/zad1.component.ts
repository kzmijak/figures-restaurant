import { Component, OnInit } from "@angular/core";

@Component({
    selector: "zad1-component",
    templateUrl: "zad1.component.html"
})
export class Zad1 implements OnInit
{
    // Auto adjust to the window size
    public innerWidth: number;
    public innerHeight: number;

    constructor(){}

    ngOnInit()
    {
        this.innerHeight = window.innerHeight;
        this.innerWidth = window.innerWidth;
    }
}