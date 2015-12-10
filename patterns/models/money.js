/**
 * Created by arnoldkrumins on 19/11/15.
 */
var currencyEnum;
(function (currencyEnum) {
    currencyEnum[currencyEnum["GBP"] = 0] = "GBP";
    currencyEnum[currencyEnum["SEK"] = 1] = "SEK";
    currencyEnum[currencyEnum["USD"] = 2] = "USD";
    currencyEnum[currencyEnum["AUD"] = 3] = "AUD";
})(currencyEnum || (currencyEnum = {}));
var money = (function () {
    function money(value, name, currency) {
        this.value = value;
        this.name = name;
        this.currency = currency;
    }
    return money;
})();
//# sourceMappingURL=money.js.map