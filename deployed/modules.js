// functions for interacting with the browser

var ui = {};

ui.navigationNotLoggedIn = `
    <!-- ------------- Navigation UI if NOT Logged In------------- -->
    <nav class="navbar navbar-expand navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#" onclick="defaultModule()">
        <img src="bank.png" width="30" height="30" class="d-inline-block align-top" alt=""> BadBank
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <a class="nav-item active nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
          <a class="nav-item active nav-link" href="#" onclick="loadLogin()">Login</a>
          <a class="nav-item disabled nav-link" href="#" tabindex="-1" aria-disabled="true">Deposit</a>
          <a class="nav-item disabled nav-link" href="#" tabindex="-1" aria-disabled="true">Withdraw</a>
          <a class="nav-item disabled nav-link" href="#" tabindex="-1" aria-disabled="true">Transactions</a>
          <a class="nav-item disabled nav-link" href="#" tabindex="-1" aria-disabled="true">Balance</a>
          <a class="nav-item disabled nav-link" href="#" tabindex="-1" aria-disabled="true">All Data</a>
        </div>
      </div>
    </nav>
`;

ui.navigationLoggedIn = `
    <!-- ------------- Navigation UI if Successfully Logged In------------- -->
    <nav class="navbar navbar-expand navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#" onclick="defaultModule()">
        <img src="bank.png" width="30" height="30" class="d-inline-block align-top" alt=""> BadBank
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <a class="nav-item active nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
          <a class="nav-item active nav-link" href="#" onclick="loadLogin()">Login</a>
          <a class="nav-item active nav-link" href="#" onclick="loadDeposit()">Deposit</a>
          <a class="nav-item active nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
          <a class="nav-item active nav-link" href="#" onclick="loadTransactions()">Transactions</a>
          <a class="nav-item active nav-link" href="#" onclick="loadBalance()">Balance</a>
          <a class="nav-item active nav-link" href="#" onclick="loadAllData()">All Data</a>
        </div>
      </div>
    </nav>
`;

ui.default = `
    <!-- ------------- Default UI ------------- -->
    <div class="card-light mb-3" style="max-width: 18rem; background-color: #e3f2fd;">
      <div class="card-header">BadBank Home</div>
      <div class="card-body">
        <h5 class="card-title">Welcome to Bad Bank</h5>
        <p class="card-text">Make a selection using the navigation bar above.</p>
        <img src="bank.png" class="card-img-top" alt="BadBank" >
      </div>
    </div>
`;

ui.createAccount = `
    <!-- ------------- Create Account UI ------------- -->
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Create Account</div>
      <div class="card-body">
        Name:<br>
        <input type="text" class="form-control" id="name" placeholder="Enter name"><br>
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        Password:<br>
        <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
        <a href="#" class="btn btn-light" onclick="create()">Create Account</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.login = `
    <!-- ------------- Login UI ------------- -->
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Login</div>
      <div class="card-body">
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        Password:<br>
        <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
        <a href="#" class="btn btn-light" onclick="login()">Login</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.deposit = `
    <!-- ------------- Deposit UI ------------- -->
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Deposit</div>
      <div class="card-body">
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        Amount:<br>
        <input type="number" class="form-control" id="amount" placeholder="Enter amount to deposit"><br>
        <a href="#" class="btn btn-light" onclick="deposit()">Deposit</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.withdraw = `
    <!-- ------------- Withdraw UI ------------- -->
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
      <div class="card-header">Withdraw</div>
      <div class="card-body">
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        Amount:<br>
        <input type="number" class="form-control" id="amount" placeholder="Enter amount to withdraw"><br>
        <a href="#" class="btn btn-light" onclick="withdraw()">Withdraw</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.transactions = `
    <!-- ------------- Transactions UI ------------- -->
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Transactions</div>
      <div class="card-body">
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        <a href="#" class="btn btn-light" onclick="transactions()">List Transactions</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.balance = `
    <!-- ------------- Balance UI ------------- -->
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Balance</div>
      <div class="card-body">
        Email Address:<br>
        <input type="email" class="form-control" id="email" placeholder="Enter email address"><br>
        <a href="#" class="btn btn-light" onclick="balance()">Show Balance</a>
      </div>
    </div>
    <div id="results"></div>
`;

ui.allData = `
    <!-- ------------- All Data UI ------------- -->
    <a href="#" class="btn btn-primary" onclick="allData()">Show All Data</a><br><br>
    <div id = "results"></div>
`;


var target       = document.getElementById('target');
var navigation   = document.getElementById('navigation');
navigation.innerHTML = ui.navigationNotLoggedIn;


var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML  = ui.balance;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
