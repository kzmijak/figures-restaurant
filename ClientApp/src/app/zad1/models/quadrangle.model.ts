import { Figure } from "./figure.model";

export class Quadrangle extends Figure
{
    constructor()
    {
        super("Quadrangle", 4, "sAXHXe","start-A(base length)-Height-end, Ex: sA2H5e");
    }

    calcsurfacearea(userstring: string): number {
        let A: number = Number(userstring.substring(userstring.indexOf('A')+1, userstring.indexOf('H')));
        let H: number = Number(userstring.substring(userstring.indexOf('H')+1, userstring.indexOf('e')));
        return A*H;
    }

    
}