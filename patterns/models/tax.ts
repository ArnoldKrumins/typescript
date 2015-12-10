/**
 * Created by arnoldkrumins on 19/11/15.
 */
/// <reference path="money.ts" />

     class tax{
        unit: money;
        constructor(currency: money) { this.unit = currency; }


         Render(currency:currencyEnum):string{

             switch(currency)
             {
                 case currencyEnum.GBP :
                     this.unit.value = this.unit.value * 2;
                     break;
                 case currencyEnum.USD :
                     this.unit.value = this.unit.value * 3;
                     break;
                 case currencyEnum.SEK :
                     this.unit.value = this.unit.value * 4;
                     break;
                 case currencyEnum.AUD :
                     this.unit.value = this.unit.value * 5;
                     break;

             }

             return this.unit.name.concat(' - ',this.unit.value.toString());
        };

    }
