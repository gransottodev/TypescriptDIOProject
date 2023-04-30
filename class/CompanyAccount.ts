import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(doc_id: number ,name: string, accountNumber: number){
    super(name, accountNumber)
  }
/* Não entendi somente como verificar a conta se a function validadeStatus é private, então mudei para readonly */
  getLoan = (loanValue: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + loanValue
      console.log(`Empréstimo de R$ ${loanValue} aprovado, saldo em conta : R$ ${this.balance}`);
    }
  }
}
