// functions for interacting with the server

// common function to run superagent action on server
function runSuperagent(url){
    var results = document.getElementById('results');
    superagent
    .get(url)
    .then(res => {
        console.log(res.text);
        results.innerHTML = (res.text);
    })
    .catch(err => {
        console.log(err);
    });
}

function create() {
    // -------------------------------------
    //  Create user account on server
    // -------------------------------------
    var name     = document.getElementById('name').value;
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url      = '/account/create/' + name + '/' + email + '/' + password;
    runSuperagent(url);
}

function login(email, password) {
    // -------------------------------------
    //  Confirm credentials on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url      = '/account/login/' + email + '/' + password;
    runSuperagent(url);
}

function deposit(email, amount) {
    // -------------------------------------
    //  Deposit funds user funds on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var amount   = document.getElementById('amount').value;
    var url      = '/account/deposit/' + email + '/' + amount;
    runSuperagent(url);
}

function withdraw(email, amount) {
    // -------------------------------------
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var amount   = document.getElementById('amount').value;
    var url      = '/account/withdraw/' + email + '/' + amount;
    runSuperagent(url);
}

function transactions(email) {
    // -------------------------------------
    //  Get all user transactions
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var url      = '/account/transactions/' + email;
    runSuperagent(url);
}

function balance(email) {
    // -------------------------------------
    //  Get user balance
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var url      = '/account/get/' + email;
    runSuperagent(url);
};

function allData() {
    // -------------------------------------
    //  Get all data
    // -------------------------------------
    var url     = '/account/all';
    runSuperagent(url);
};
