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

    public value: number;
    public name: string;
    public currency:currencyEnum;


    constructor(value:number, name:string, currency:currencyEnum){
        this.value = value;
        this.name = name;
        this.currency = currency;
    }

}


