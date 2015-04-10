/**
 * Created by arnold.krumins on 10/04/2015.
 */
interface taxable{
    calculate();
}

class tax{
    value:number;
    constructor(paramvalue: number) { this.value = paramvalue; }
}


class ukTax extends tax implements taxable{

    constructor(value: number) { super(value); }

    calculate(){
        return this.value * 2;
    }
}


class usTax extends tax implements taxable{

    constructor(value: number) { super(value); }

    calculate(){
        return this.value * 2.5;
    }
}


class seTax extends tax implements taxable{

    constructor(value: number) { super(value); }

    calculate(){
        return this.value * 1.5;
    }
}



class taxProvider{

   private dict: { [index: number]: tax; } = {};

   public init(index:number, taxObject:tax){

       this.dict[index] = taxObject;
   }

   public setup(){

       this.dict[1] = new ukTax(10);
       this.dict[2] = new usTax(10);
       this.dict[3] = new seTax(10);
   }

   public get(index:number){
        return this.dict[index];
    }

}


