import { Component, OnInit } from "@angular/core";
import { Table } from "../models/table.model";
import { Course } from "../models/course.model";

// Central hub of the localStorage communication infrastructure
@Component({
    selector: "zad2",
    templateUrl: "zad2.component.html"
})
export class Zad2 implements OnInit{

    constructor(){}

    // Seed localStorage with the default values on startup
    ngOnInit(): void {
        let tables = new Array<Table>();
        let courses = new Array<Course>();

        tables.push(
            new Table("Normal 1"),
            new Table("Normal 2"),
            new Table("Normal 3"),
            new Table("Exclusive 1"),
            new Table("Exclusive 2"),
            new Table("Presidential 1"),
            new Table("Presidential 2")
        )
        courses.push(
            new Course("Coffee", 5),
            new Course("Tea", 4),
            new Course("Water", 1),
            new Course("Chicken Salad", 10),
            new Course("Hamburger", 8),
            new Course("Cookies", 6),
            new Course("Spaghetti", 7)
        )
        localStorage.setItem("tables", JSON.stringify(tables));
        localStorage.setItem("courses", JSON.stringify(courses));

    }

    // Array of all tables
    get tables(): Array<Table>
    {
        return JSON.parse(localStorage.getItem("tables"));
    }

    // Array of all courses
    get courses():Array<Course>
    {
        return JSON.parse(localStorage.getItem("courses"));
    }

    // Array of tables that are currently selected 
    get selectedTables():Array<Table>
    {
        if(JSON.parse(localStorage.getItem("selectedTables")))
            return JSON.parse(localStorage.getItem("selectedTables"));
        return new Array<Table>();
    }

    // Merge selectedTables with all tables 
    mergeTables():void{
        let selectedtables = this.selectedTables;
        let globaltables = this.tables;

        globaltables.forEach( gtb =>{
            selectedtables.forEach( stb => {
                if(gtb.name == stb.name)
                {
                    gtb.courses = stb.courses;
                }
            })
        })
        localStorage.setItem("tables", JSON.stringify(globaltables));
    }
}