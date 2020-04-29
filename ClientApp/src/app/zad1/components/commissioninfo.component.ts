import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'commission-info-1',
    templateUrl: 'commissioninfo.component.html'
})
export class CommissionInfo1 implements OnInit
{
    // Dynamic component size scaling (20% Height, 100% Width)
    public innerWidth: number;
    public innerHeight: number;

    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 1/5 * window.innerHeight;
        this.innerWidth = window.innerWidth;
    }
}