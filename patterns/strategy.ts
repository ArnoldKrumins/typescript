/**
 * Created by arnold.krumins on 10/04/2015.
 */
interface taxable{

    calculate(val:number);

}

class tax{


}


class ukTax extends tax implements taxable{

    calculate(val:number){

        return val * 2;
    }
}


class usTax implements taxable{

    calculate(val:number){

        return val * 2.5;
    }
}


class seTax implements taxable{

    calculate(val:number){

        return val * 1.5;
    }
}



class taxProvider{

   private dict: { [index: number]: tax; } = {};

   public init(index:number, taxObject:tax){

       this.dict[index] = taxObject;
   }

   public setup(){

       this.dict[1] = new ukTax();
       this.dict[2] = new usTax();
       this.dict[3] = new seTax();
   }

   public get(index:number){
        return this.dict[index];
    }

}


