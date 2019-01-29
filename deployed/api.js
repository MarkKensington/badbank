// functions for interacting with the server

function create() {
    // -------------------------------------
    //  Create user account on server
    // -------------------------------------
    var name     = document.getElementById('name').value;
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url      = '/account/create/' + name + '/' + email + '/' + password;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        console.log(res.text);
        results.innerHTML = (res.text);
      })
      .catch(err => {
        console.log(err);
      });
};

function login() {
    // -------------------------------------
    //  Confirm credentials on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url      = '/account/login/' + email + '/' + password;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        console.log(res.body);
        if (res.body == null){
            navigation.innerHTML = ui.navigationNotLoggedIn;
            results.innerHTML = (null);    
        }
        else{
            navigation.innerHTML = ui.navigationLoggedIn;
            results.innerHTML = (`Account [${ email }] successfully logged in.`);
        }
      })
      .catch(err => {
        console.log(err);
      });
};

function deposit() {
    // -------------------------------------
    //  Deposit funds user funds on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var amount   = document.getElementById('amount').value;
    var url      = '/account/deposit/' + email + '/' + amount;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        console.log(res.text);
        results.innerHTML = (res.text);
      })
      .catch(err => {
        console.log(err);
      });
};

function withdraw() {
    // -------------------------------------
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var amount   = document.getElementById('amount').value;
    var url      = '/account/withdraw/' + email + '/' + amount;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        console.log(res.text);
        results.innerHTML = (res.text);
      })
      .catch(err => {
        console.log(err);
      });
};

function transactions() {
    // -------------------------------------
    //  Get all user transactions
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var url      = '/account/transactions/' + email;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        if (res.body == null){
            console.log(`Account [${ email }] does not exist!`);
            results.innerHTML = (`Account [${ email }] does not exist!`);
        }
        else{
            console.log(res.body);
            results.innerHTML = (res.text);
        }
      })
      .catch(err => {
        console.log(err);
      });
};

function balance() {
    // -------------------------------------
    //  Get user balance
    // -------------------------------------
    var email    = document.getElementById('email').value;
    var url      = '/account/get/' + email;
    var results  = document.getElementById('results');

    superagent
      .get(url)
      .then(res => {
        if (res.body == null){
            console.log(`Account [${ email }] does not exist!`);
            results.innerHTML = (`Account [${ email }] does not exist!`);
        }
        else{
            console.log(res.body);
            results.innerHTML = (`Account [${ email }] has a balance of [${ res.body.balance }]`);
        }
      })
      .catch(err => {
        console.log(err);
      });
};

function allData() {
    // -------------------------------------
    //  Get all data
    // -------------------------------------
    var url     = '/account/all';
    var results = document.getElementById('results');
    
    superagent
      .get(url)
      .then(res => {
        console.log(res.body);
        results.innerHTML = (res.text);
      })
      .catch(err => {
        console.log(err);
      });
};
