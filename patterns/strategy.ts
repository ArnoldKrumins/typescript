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
        return super.Render(this.unit.currency);
    }
}

class usTax extends tax implements taxable{

    constructor(currency: money) {
        super(currency);
    }

    calculate(){
        return super.Render(this.unit.currency);
    }
}

class seTax extends tax implements taxable{

    constructor(currency: money) {
        super(currency);
    }

    calculate(){
        return super.Render(this.unit.currency);
    }
}


class ausTax extends tax implements taxable{

    constructor(currency: money) {
        super(currency);
    }

    calculate(){
        return super.Render(this.unit.currency);
    }
}



//Create a 'taxProvier' factory class to access tax strategy objects
class taxProvider {

   private dict: { [index: number]: tax; } = {};

    constructor(){
        this.dict[1] = new ukTax(new money(100,'UK Tax',currencyEnum.GBP));
        this.dict[2] = new usTax(new money(100,'US Tax',currencyEnum.USD));
        this.dict[3] = new seTax(new money(100,'SE Tax',currencyEnum.SEK));
        this.dict[4] = new ausTax(new money(100,'Aus Tax',currencyEnum.AUD));
    }

   public get(index:number){
        return this.dict[index];
    }

}







