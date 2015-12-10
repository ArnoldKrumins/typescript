/**
 * Created by arnold.krumins on 10/04/2015.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="interfaces/taxable.ts" />
/// <reference path="models/tax.ts" />
/// <reference path="models/money.ts" />
var ukTax = (function (_super) {
    __extends(ukTax, _super);
    function ukTax(currency) {
        _super.call(this, currency);
    }
    ukTax.prototype.calculate = function () {
        return _super.prototype.Render.call(this, this.unit.currency);
    };
    return ukTax;
})(tax);
var usTax = (function (_super) {
    __extends(usTax, _super);
    function usTax(currency) {
        _super.call(this, currency);
    }
    usTax.prototype.calculate = function () {
        return _super.prototype.Render.call(this, this.unit.currency);
    };
    return usTax;
})(tax);
var seTax = (function (_super) {
    __extends(seTax, _super);
    function seTax(currency) {
        _super.call(this, currency);
    }
    seTax.prototype.calculate = function () {
        return _super.prototype.Render.call(this, this.unit.currency);
    };
    return seTax;
})(tax);
var ausTax = (function (_super) {
    __extends(ausTax, _super);
    function ausTax(currency) {
        _super.call(this, currency);
    }
    ausTax.prototype.calculate = function () {
        return _super.prototype.Render.call(this, this.unit.currency);
    };
    return ausTax;
})(tax);
//Create a 'taxProvier' factory class to access tax strategy objects
var taxProvider = (function () {
    function taxProvider() {
        this.dict = {};
        this.dict[1] = new ukTax(new money(100, 'UK Tax', currencyEnum.GBP));
        this.dict[2] = new usTax(new money(100, 'US Tax', currencyEnum.USD));
        this.dict[3] = new seTax(new money(100, 'SE Tax', currencyEnum.SEK));
        this.dict[4] = new ausTax(new money(100, 'Aus Tax', currencyEnum.AUD));
    }
    taxProvider.prototype.get = function (index) {
        return this.dict[index];
    };
    return taxProvider;
})();
//# sourceMappingURL=strategy.js.map