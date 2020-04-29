import { Component, OnInit, Input } from "@angular/core";
import { Table } from "../models/table.model";

@Component({
    selector: 'cheatsheet-component',
    templateUrl: 'cheatsheet.component.html'
})
export class CheatSheet implements OnInit
{
    @Input() tables:Array<Table>;

    // Dynamic component size scaling (80% Height, 20% Width)
    public innerWidth: number;
    public innerHeight: number;

    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 4/5 * window.innerHeight;
        this.innerWidth = 1/5 * window.innerWidth;
    }

    // Returns the new list of tables that has courses assigned to them
    get tablesWithOrders():Array<Table>
    {
        let tablesWithOrders = new Array<Table>();
        this.tables.forEach( t => {
            if(t.courses.length > 0)
                tablesWithOrders.push(t);
        })
        return tablesWithOrders;
    }

    // Returns given table's total price of courses
    toPay(table:Table):number
    {
        let total:number = 0;
        table.courses.forEach( c => {
            total += c.price * c.quantity;
        })   
        return total; 
    }
}