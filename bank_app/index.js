// Define the BankAccount class
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            return "Insufficient funds";
        }
    }

    getBalance() {
        return this.balance;
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.balance}`;
    }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount("123456789", "John Doe", 1000);
const account2 = new BankAccount("987654321", "Jane Smith", 2000);

// Deposit and withdraw from account1
account1.deposit(500);
console.log("Account 1 Balance after deposit:", account1.getBalance()); // Output: Account 1 Balance after deposit: 1500

account1.withdraw(200);
console.log("Account 1 Balance after withdrawal:", account1.getBalance()); // Output: Account 1 Balance after withdrawal: 1300

// Deposit and withdraw from account2
account2.deposit(1000);
console.log("Account 2 Balance after deposit:", account2.getBalance()); // Output: Account 2 Balance after deposit: 3000

account2.withdraw(500);
console.log("Account 2 Balance after withdrawal:", account2.getBalance()); // Output: Account 2 Balance after withdrawal: 2500

// Display account information for both accounts
console.log("Account 1 Info:", account1.getAccountInfo());
console.log("Account 2 Info:", account2.getAccountInfo());
