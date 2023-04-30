import { DioAccount } from "./DioAccount";

export class NewDioAccount extends DioAccount{
  
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }


  deposit = (depositValue: number): void => {
    depositValue = depositValue + 10
    this.balance = this.balance + depositValue

    console.log(`O valor depositado foi: R$ ${depositValue} e o saldo atual : R$ ${this.balance}`);
  }
}