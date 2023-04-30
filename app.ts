import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewDioAccount } from './class/newDioAccount'

// PeopleAccount Deposit and Withdraw
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(15)

// companyAccount Deposit, Withdraw and Loan
const companyAccount: CompanyAccount = new CompanyAccount(2, 'Gransotto', 15)
companyAccount.deposit(10)
companyAccount.withdraw(15)
companyAccount.getLoan(15000)

//NewDioAccount deposit
const newDioAccount: NewDioAccount = new NewDioAccount('Gransotto', 25)
newDioAccount.deposit(25) 