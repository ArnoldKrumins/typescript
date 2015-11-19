/**
 * Created by arnold.krumins on 10/04/2015.
 */

/// <reference path="interfaces/taxable.ts" />
/// <reference path="models/tax.ts" />
/// <reference path="models/money.ts" />

class ukTax extends tax implements taxable{

    constructor(currency: money){
        super(currency);
    }

    calculate(){
        return this.unit.name.concat('- ',this.unit.value * 2);
    }
}


class usTax extends tax implements taxable{

    constructor(currency: money) {
        super(currency);
    }

    calculate(){
        return this.unit.name.concat('- ',this.unit.value  * 2.5);
    }
}

class seTax extends tax implements taxable{

    constructor(currency: money) {
        super(currency);
    }

    calculate(){
        return this.unit.name.concat('- ',this.unit.value  * 1.5);
    }
}


//Create a 'taxProvier' factory class to access tax strategy objects
class taxProvider {

   private dict: { [index: number]: tax; } = {};

    constructor(){
        this.dict[1] = new ukTax(new money(10,'UK Tax',currencyEnum.GBP));
        this.dict[2] = new usTax(new money(100,'US Tax',currencyEnum.USD);
        this.dict[3] = new seTax(new money(200,'SE Tax',currencyEnum.SEK));
    }

   public get(index:number){
        return this.dict[index];
    }

}







