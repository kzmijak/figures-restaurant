import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Table } from "../models/table.model";

@Component({
    selector: 'tables-component',
    templateUrl: 'tables.component.html'
})
export class Tables implements OnInit
{
    // Requests latest list of selected tables from localStorage
    // Source: Zad2.selectedTables (getter)
    @Input() selectedTablesLS: Array<Table>;

    // Requests lates list of all tables from localStorage
    // Source: Zad2.tables (getter)
    @Input() tables: Array<Table>;
    
    // Dynamic component size scaling (80% Height, 20% Width)
    public innerWidth: number;
    public innerHeight: number;
    private selectedTables: Array<Table>;


    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 4/5 * window.innerHeight;
        this.innerWidth = 1/5 * window.innerWidth;
        
        this.selectedTables = new Array<Table>();
    }

    // Adds given table to the selectedTables list
    // Removes given table from the selectedTables list if already a member
    // Saves the list to the localStorage under "selectedTables" key
    selectTable(table:Table): void
    {
        this.selectedTables = this.selectedTablesLS.filter(tb => tb.name != table.name);
        if(this.selectedTables.length == this.selectedTablesLS.length)
        {
            this.selectedTables.push(table);
        }
        localStorage.setItem("selectedTables",JSON.stringify(this.selectedTables));
    }
}