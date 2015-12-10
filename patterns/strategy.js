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
    function ukTax(value) {
        this.name = 'UK Tax';
        _super.call(this, value);
    }
    ukTax.prototype.calculate = function () {
        return this.name + ' - ' + this.value * 2;
    };
    return ukTax;
})(tax);
var usTax = (function (_super) {
    __extends(usTax, _super);
    function usTax(value) {
        this.name = 'US Tax';
        _super.call(this, value);
    }
    usTax.prototype.calculate = function () {
        return this.name + ' - ' + this.value * 2.5;
    };
    return usTax;
})(tax);
var seTax = (function (_super) {
    __extends(seTax, _super);
    function seTax(value) {
        this.name = 'SE Tax';
        _super.call(this, value);
    }
    seTax.prototype.calculate = function () {
        return this.name + ' - ' + this.value * 1.5;
    };
    return seTax;
})(tax);
//Create a 'taxProvier' factory class to access tax strategy objects
var taxProvider = (function () {
    function taxProvider() {
        this.dict = {};
        this.dict[1] = new ukTax(10);
        this.dict[2] = new usTax(10);
        this.dict[3] = new seTax(10);
    }
    taxProvider.prototype.get = function (index) {
        return this.dict[index];
    };
    return taxProvider;
})();
//# sourceMappingURL=strategy.js.map