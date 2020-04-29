import { Figure } from "./figure.model";

export class Triangle extends Figure
{
    constructor()
    {
        super("Triangle", 3, "sAXHXe","start-A(upper base)-Height-end, Ex: sA5H2e");
    }

    calcsurfacearea(userstring: string): number {
        let A: number = Number(userstring.substring(userstring.indexOf('A')+1, userstring.indexOf('H')));
        let H: number = Number(userstring.substring(userstring.indexOf('H')+1, userstring.indexOf('e')));
        return A*H/2;
    }
    
}