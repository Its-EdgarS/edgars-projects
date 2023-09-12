class Bank {
    constructor() {
        this.balance = 0
    }

    deposit(amount) {
        this.balance += amount
    }
    
    withdraw(amount) {
        this.balance -= amount
    }
}

AllyBank = new Bank() 

const amount = document.getElementById("amount")
const depb = document.getElementById("depb")
const witb = document.getElementById("witb")

depb.addEventListener("click", function() {
    AllyBank.deposit(parseFloat(amount.value))
    updateBal()
})

witb.addEventListener("click", function() {
    if (AllyBank.balance >= amount.value) { 
        AllyBank.withdraw(parseFloat(amount.value))
        updateBal()
    }
})

function updateBal() {
    const balanceSpan = document.getElementById("bal")
    balanceSpan.innerText = AllyBank.balance
}