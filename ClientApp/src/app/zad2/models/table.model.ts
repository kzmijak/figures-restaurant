import { Course } from "./course.model";

export class Table
{
    public name: string;
    public courses: Array<Course>;

    constructor(name:string)
    {
        this.name = name;
        this.courses = new Array<Course>();
    }
    
    // Adds course to the table
    // If the same course already exists in the table, only increase the quantity
    // If there is no matching course in the table, push new course
    public addCourse(course:Course): void
    {
        let alreadyexists: Boolean = false; 
        this.courses.forEach( co => {
            if(co.name == course.name && co.price == course.price)
            {
                alreadyexists = true;
                co.quantity += 1;
            }
        })
        if(!alreadyexists)
        {
            course.quantity = 1;
            this.courses.push(course);
        }
    }
}