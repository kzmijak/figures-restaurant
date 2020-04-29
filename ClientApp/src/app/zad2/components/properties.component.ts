import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Table } from "../models/table.model";
import { Course } from "../models/course.model";

@Component({
    selector: 'properties-component',
    templateUrl: 'properties.component.html'
})
export class Properties implements OnInit
{

    // Requests latest selectedTables array from the localStorage
    // Source: Zad2.selectedTables (getter)
    @Input() selectedTables: Array<Table> = new Array<Table>();

    // Requests latest courses array from the localStorage
    // Source: Zad2.courses (getter)
    @Input() coursesLS: Array<Course>;

    // Calls for merging selectedTables with tables
    // Receiver: Zad2.mergeTables()
    @Output() mergeTables = new EventEmitter();

    // Dynamic component size scaling (80% Height, 60% Width)
    public innerWidth: number;
    public innerHeight: number;

    private courses: Array<Course>;
    private selectedTable: Table;

    // List of tables that are marked for checkout
    private checkout:Array<string> = new Array<string>();

    constructor(){}

    ngOnInit()
    {
        // set component size based on the current window size
        this.innerHeight = 4/5 * window.innerHeight;
        this.innerWidth = 3/5 * window.innerWidth;

        this.courses = this.coursesLS;
    }

    // Resets the selectedTable upon deselecting or selecting more than one table
    regenerateTable():void
    {
        this.selectedTable = null;
    }

    // Assigns the instance of selectedTables[0] to local variable
    generateTable():void
    {
        if(!this.selectedTable)
        {
            this.selectedTable = this.selectedTables[0];
        }
        if(this.selectedTable && this.selectedTable.name != this.selectedTables[0].name)
        {
            this.selectedTable = this.selectedTables[0];
        }
    }

    // Add empty course to the selectedTable
    addCourse():void
    {
        this.selectedTable.courses.push(new Course("",0));
        this.selectedTable.courses[0].quantity=0;
    }

    // Removes selected course from the selectedTable
    // Saves changse to localStorage under "selectedTables" key
    // Calls for the merge method
    removeCourse(i:number):void
    {
        // Okay, watch out, this is actually my favourite line of this project, just because of how dumb it is,
        // so basically what's happening here is that I want to select the first and only selected table,
        // hence selectedTables[0], and then I want to change it's courses collection.
        // What I do now is I take the same table using the same syntax as I did before, then I manipulate
        // it's courses collection by filtering out the course that is the same as the i-th
        // course of the current table, effectively removing the i-th object from the array.
        // Now I can assign the filtered array to the old array, and now I get the properly
        // manipulated array I can save in the local storage.
        this.selectedTables[0].courses = this.selectedTables[0].courses.filter( c => c != this.selectedTables[0].courses[i]);
        
        localStorage.setItem("selectedTables", JSON.stringify(this.selectedTables));
        this.mergeTables.emit(null);
    }

    // Edits selected course from the selectedTable
    // Saves changse to localStorage under the "selectedTables" key
    // Calls for the merge method
    editCourse(i:number, name:string, price:number, amount:number):void
    {
        if(name != "")
        {
            let newcourse:Course = new Course(name,price);
            newcourse.quantity = amount;
            this.selectedTables[0].courses[i] = newcourse;   
    
            localStorage.setItem("selectedTables", JSON.stringify(this.selectedTables));
            this.mergeTables.emit(null);
        }
    }

    // Adds the selectedTable to the checkout array
    addToCheckout():void{
        this.checkout.push(this.selectedTable.name);
    }

    // Calculates the total price of the courses for the table
    // Includes the optional tip
    get toPay():number
    {
        let total:number = 0;
        this.selectedTables[0].courses.forEach( c => {
            total += c.price * c.quantity;
        })
        return total * this.tip; 
    }

    // Toggles the tip modifier based on checkbox
    toggleTip(state:boolean)
    {
        if(state == true)
        {
            this.tip = 1.05;
        }
        if(state == false)
        {
            this.tip = 1.00;
        }
    }
    private tip:number = 1;

    // Handles the course selection from the drop-down list
    selectCourse(course:Course)
    {
        this.selectedCourse = course;
    }
    private selectedCourse: Course;

    // Adds selected course to all tables from selectedTables
    addCourses():void
    {
        this.selectedTables.forEach(tb => {
            let a:Table = new Table(tb.name);
            a.courses = tb.courses;
            a.addCourse(this.selectedCourse);
            tb = a;
        });
        localStorage.setItem("selectedTables", JSON.stringify(this.selectedTables));
        this.mergeTables.emit(null);
    }

    // cancles selectedCourse from the selected table
    cancelCourse(table:Table):void
    {
        this.selectedTables.forEach(tb => {
            if(tb.name == table.name)
            {
                tb.courses = tb.courses.filter( c => c.name != this.selectedCourse.name)
            }
        });
        localStorage.setItem("selectedTables", JSON.stringify(this.selectedTables));
        this.mergeTables.emit(null);
    }

    // returns true if given table's courses list contains selectedCourse
    // returns fale if not
    isOrdered(table:Table):boolean
    {
        if(table.courses.filter(c => c.name==this.selectedCourse.name).length>0)
        {
            return true;
        }
        return false;
    }
}