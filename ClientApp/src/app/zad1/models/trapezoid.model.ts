import { Figure } from "./figure.model";

export class Trapezoid extends Figure
{
    constructor()
    {
        super("Trapezoid", 4, "sAXBXHXe","start-A(upper base)-B(bottom base)-Height-end, Ex: sA5B4H3e");
    }

    calcsurfacearea(userstring: string): number {
        let A: number = Number(userstring.substring(userstring.indexOf('A')+1, userstring.indexOf('B')));
        let B: number = Number(userstring.substring(userstring.indexOf('B')+1, userstring.indexOf('H')));
        let H: number = Number(userstring.substring(userstring.indexOf('H')+1, userstring.indexOf('e')));
        return (A+B)/2*H;
    }
    
}