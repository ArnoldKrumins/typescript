/**
 * Created by arnold.krumins on 10/04/2015.
 */

/// <reference path="interfaces/taxable.ts" />
/// <reference path="models/tax.ts" />
/// <reference path="models/money.ts" />

class ukTax extends tax implements taxable{

    constructor(value: number){
        this.name ='UK Tax';
        super(value);
    }

    calculate(){
        return this.name + ' - ' + this.value * 2;
    }
}


class usTax extends tax implements taxable{

    constructor(value: number) {
        this.name ='US Tax';
        super(value);
    }

    calculate(){
        return this.name + ' - ' + this.value * 2.5;
    }
}

class seTax extends tax implements taxable{

    constructor(value: number) {
        this.name ='SE Tax';
        super(value);
    }

    calculate(){
        return this.name + ' - ' + this.value * 1.5;
    }
}


//Create a 'taxProvier' factory class to access tax strategy objects
class taxProvider {

   private dict: { [index: number]: tax; } = {};

    constructor(){
        this.dict[1] = new ukTax(10);
        this.dict[2] = new usTax(10);
        this.dict[3] = new seTax(10);
    }

   public get(index:number){
        return this.dict[index];
    }

}







