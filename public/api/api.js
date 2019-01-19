// functions for interacting with the server

function create(name, email, password) {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
}

function login(email, password) {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
}

function deposit(email, amount) {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
}

function withdraw(email, amount) {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions(email) {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance(email) {
    // -------------------------------------
    //  Get user balance
    // -------------------------------------
    var target = document.getElementById('target');
    var url    = '/account/balance/' + email.value;

    superagent
        .get(url)
        .then(res => {
            console.log(res.text);
            target.innerHTML = (res.text);
        })
        .catch(err => {
            console.log(err);
        });
};

function allData() {
    // -------------------------------------
    //  Get all data
    // -------------------------------------
    var target = document.getElementById('target');
    var url    = '/account/all';

    superagent
        .get(url)
        .then(res => {
            console.log(res.text);
            target.innerHTML = (res.text);
        })
        .catch(err => {
            console.log(err);
        });
};

