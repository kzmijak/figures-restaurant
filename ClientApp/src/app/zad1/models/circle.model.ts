import { Figure } from "./figure.model";

export class Circle extends Figure
{
    radius:number;

    constructor()
    {
        super("Circle", 0, "sRXe","start-Radius-Xinput-end, Ex: sR5e, sR50e, sR5.0e");
    }
    
    calcsurfacearea(userstring: string): number {
        let R: number = Number(userstring.substring(userstring.indexOf('R')+1, userstring.indexOf('e')));
        return R*R*3.14;
    }

}