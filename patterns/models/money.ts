/**
 * Created by arnoldkrumins on 19/11/15.
 */


enum currencyEnum{
    GBP,
    SEK,
    USD,
    AUD
}

  class money {

    private value: number = 0;
    private currency;


    constructor(value:number, currency:currencyEnum){
        this.value = value;
        this.currency = currencyEnum;
    }

}


