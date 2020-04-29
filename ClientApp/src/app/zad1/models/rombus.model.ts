import { Figure } from "./figure.model";

export class Rombus extends Figure
{
    constructor()
    {
        super("Rombus", 4, "sAXHXEXFXe","start-A(base length)-Height-E(diagonal1)-F(diagonal2)-end, Ex: sA5H2e OR sE3F4e");
    }

    matchFormatString(userstring: string): boolean {
        let usca: string[] = userstring.split('');
        let checkstring: string = "";
        usca.forEach(char => {
            if(!isNaN(Number(char)) && checkstring.split('').pop() != 'X')
            {
                checkstring += 'X';
            }
            if(isNaN(Number(char)) && char != ".")
            {
                checkstring += char;
            }
        });
        if(checkstring == "sAXHXe" || checkstring == "sEXFXe")
        {
            return true;
        }
        return false;
    }    
    
    calcsurfacearea(userstring:string): number {
        if(userstring.includes('A') && userstring.includes('H'))
        {
            let A: number = Number(userstring.substring(userstring.indexOf('A')+1, userstring.indexOf('H')));
            let H: number = Number(userstring.substring(userstring.indexOf('H')+1, userstring.indexOf('e')));
            return A*H;
        }
        if(userstring.includes('E') && userstring.includes('F'))
        {
            let E: number = Number(userstring.substring(userstring.indexOf('E')+1, userstring.indexOf('F')));
            let F: number = Number(userstring.substring(userstring.indexOf('F')+1, userstring.indexOf('e')));
            return E*F/2;
        }
        return 0;
    }
    
}