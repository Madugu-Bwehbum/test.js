class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log("Money deposited successfully");
        } else {
            console.log("Please enter a valid amount");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("You don't have enough money");
        } else if (amount <= 0) {
            console.log("Please enter a valid amount");
        } else {
            this.balance = this.balance - amount;
            console.log("Money withdrawn successfully");
        }
    }

    checkBalance() {
        console.log("Your balance is: " + this.balance);
    }
}

const account = new BankAccount(1000);

account.checkBalance();

account.deposit(500);
account.checkBalance();

account.withdraw(300);
account.checkBalance();