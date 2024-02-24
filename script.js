var username = "";
var password = "";
var currentBalance = 0; // Initial balance

function createAccount() {
    username = document.getElementById("username").value.trim();
    password = document.getElementById("password").value;
    if(username !== "" && password !== "") {
        alert("Account created successfully");
        document.getElementById("signUp").style.display = "none";
        document.getElementById("loggedIn").style.display = "block";
    } else if(username === "" && password !== ""){
       alert("Please enter a valid username");
    } else {
        alert("Please enter the username and password to create an account");
    }
}

function login() {
    var tryUsername = document.getElementById("loginUsername").value;
    var tryPassword = document.getElementById("loginPassword").value;

    if(tryUsername === username && tryPassword === password) {
        alert("Login successful");
        document.getElementById("loggedIn").style.display = "none";
        document.getElementById("balance").style.display = "block";
    } else {
        alert("Wrong username or password. Please try again");
    }
}

function addBalance() {
    var addAmount = prompt("How much would you like to add to your balance account?").trim();
    if(addAmount !== "" && !isNaN(addAmount)) {
        currentBalance += parseFloat(addAmount);
        alert("Balance added successfully. Your new balance is: " + currentBalance + " JD");
    } else {
        alert("Invalid amount. Please enter a valid amount");
    }
}

function checkBalance() {
    alert("Your current balance is " + currentBalance + " JD");
}
