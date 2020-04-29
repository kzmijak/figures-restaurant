export class Course
{
    public name:string;
    public price:number;
    public quantity:number;

    constructor(name:string, price:number)
    {
        this.name = name;
        this.price = price;
        this.quantity = 0;
    }
}