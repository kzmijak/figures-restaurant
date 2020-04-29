export abstract class Figure
{
    name: string;
    angles: number;
    formatstring: string;
    formatstringdesc: string;
    surfacearea: number;

    constructor(name:string, angles:number, formatstring:string, formatstringdesc:string)
    {
        this.name = name;
        this.angles = angles;
        this.formatstring = formatstring;
        this.formatstringdesc = formatstringdesc;
    }

    matchFormatString(userstring: string): boolean {
        //usestring char array
        let usca: string[] = userstring.split('');
        
        // declare conversion from user input to formatstring template
        let checkstring: string = "";

        // IF the current character is a number AND the previous was not a number
        // THEN add 'X' to the conversion string
        // IF the current character is a letter AND not a dot
        // THEN add that character to the conversion string 
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

        // IF converted string matches the format string template
        // THEN return true
        // ELSE return false
        if(checkstring == this.formatstring)
        {
            return true;
        }
        return false;
    }    
    
    // This method, when properly implemented, should extract
    // the figure's lenghts and return the surface area
    abstract calcsurfacearea(userstring: string): number;
}