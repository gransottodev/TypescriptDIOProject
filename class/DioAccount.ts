export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 35
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  deposit = (depositValue : number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + depositValue
      console.log(`O valor depositado foi R$ ${depositValue} e o valor total é de: R$${this.balance}` );
    }
  }

  withdraw = (withdrawValue: number): void => {
    if(this.validateStatus()){
      if(this.balance >= withdrawValue){
        this.balance = this.balance - withdrawValue
        console.log(`O valor sacado foi R$ ${withdrawValue} e o saldo atual é de: R$ ${this.balance}`);
      } else {
        console.log(`O valor informado para saque é maior que o saldo atual`);
      }
    }
  }

  getName = (): string => {
    return this.name
  }

  
  getBalance = (): void => {
    console.log(this.balance)
  }

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
