//clases en type

export class Propiedad{
    constructor(public volumen: number){}
}

//public string o que sea number string | number
//prop opcional?: string
//prop opcional?: number = 0

export class Elemento extends Propiedad{
    //private prop1: string;
    //public prop2: string;
    //static prop3: string;

    constructor(
      public pro1: string,
      public pro3: string = "",
      public pro2?: number,
      public pro4?: Propiedad){
        super(pro2)
      }

    restar(a: number, b: number){
        console.log(this.volumen)
    }
}

