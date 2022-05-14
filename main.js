function Account() {
  this.balance = 0;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== "number" || amount < 0) {
    console.log("Error 'Invalid amount'");
  } else if (this.balance < amount) {
    console.log("Error 'Insufficient balance!'");
  } else {
    this.balance -= amount;
  }
};

Account.prototype.getBalance = function () {
  console.log(this.balance);
  return this.balance;
};

const newAccount = new Account("Kostas Minaidis");

// New account created for: Kostas Minaidis
// IBAN: GR00010003

newAccount.getBalance(); // 0
newAccount.deposit(100);
newAccount.getBalance(); // 100
newAccount.withdraw(50);
newAccount.getBalance(); // 50

newAccount.withdraw(500); // Error 'Insufficient balance!'
newAccount.withdraw("50"); // Error 'Invalid amount'
newAccount.withdraw(-150); // Error 'Invalid amount'