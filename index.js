// setup server
const express  = require('express');
const app      = express();
const port     = 3000;
const cors     = require('cors');
const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter  = new FileSync('db.json');
const db       = low(adapter);

// setup directory used to serve static files
app.use(express.static('public'));

// allow Cross-Origin Resource Sharing (CORS)
app.use(cors());

// setup data store
db.defaults({ accounts: []}).write();

// start server
app.listen(port, function(){
    console.log(`Express Web Server is running on port ${port}`);
});

// required data store structure
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

// Function to create a new transaction record
var createTrans = function (action, amount){
    var transRecord = {
        "action"    : action,
        "amount"    : amount,
        "timestamp" : new Date()
    };
    return transRecord;
};

// Function to find a record
var findRecord = function (emailId){
    var foundRecord = 
        db.get('accounts')
          .find({ email: emailId })
          .value();
    return foundRecord;
};    

// Create account
  // return success or failure string
app.get('/account/create/:name/:email/:password', function (req, res) {
    // first check to see if account already exists & if so return error message
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        console.log(`Account [${ req.params.email }] already exists!`);
        res.send(`Account [${ req.params.email }] already exists!`);
    }
    // if account does not exist then create account & return success message
    else{
        var newRecord = {
            "name"         : req.params.name,
            "email"        : req.params.email,
            "balance"      : 0,
            "password"     : req.params.password,
            "transactions" : [ createTrans("create", 0) ]
        };
        db.get('accounts')
          .push(newRecord)
          .write();
        console.log(`Account for ${ req.params.name } with email address [${ req.params.email }] successfully created.`);
        res.send(`Account for ${ req.params.name } with email address [${ req.params.email }] successfully created.`);
    }
});

// Login user - confirm credentials
  // If success, return account object    
  // If fail, return null
app.get('/account/login/:email/:password', function (req, res) {
    //first check to see if account exists
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        // second check to see if password is correct & if so return success message
        if (getRecord.password == req.params.password){
            getRecord.transactions.push(createTrans("loginSuccess", 0));
            db.get('accounts')
              .find({ email: req.params.email })
              .assign({ transactions: getRecord.transactions })
              .write();
            console.log(getRecord);
            res.send(getRecord);
        }
        // if password fails then write a transaction but return null
        else{
            console.log(getRecord);
            getRecord.transactions.push(createTrans("loginFail", 0));
            db.get('accounts')
              .find({ email: req.params.email })
              .assign({ transactions: getRecord.transactions })
              .write();
            console.log(getRecord);
            res.send(null);
        }
    }
    // if account does not exist then return null
    else{
        console.log(`Account [${ req.params.email }] does not exist!`);
        res.send(null);
    }
});

// Deposit amount for email
  // return success or failure string
app.get('/account/deposit/:email/:amount', function (req, res) {
    //first check to see if account exists & if so make deposit & return success message
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        getRecord.balance += JSON.parse(req.params.amount);
        getRecord.transactions.push(createTrans("deposit", JSON.parse(req.params.amount)));
        db.get('accounts')
          .find({ email: req.params.email })
          .assign({ balance: getRecord.balance,
                    transactions: getRecord.transactions })
          .write();
        console.log(`Account [${ req.params.email }] now has a balance of [${ getRecord.balance }]`);
        res.send(`Account [${ req.params.email }] now has a balance of [${ getRecord.balance }]`);
    }
    // if account does not exist then return error message
    else{
        console.log(`Account [${ req.params.email }] does not exist!`);
        res.send(null);
    }
});

// Withdraw amount for email
  // return success or failure string
app.get('/account/withdraw/:email/:amount', function (req, res) {
    //first check to see if account exists & if so make withdrawal & return success message
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        getRecord.balance -= JSON.parse(req.params.amount);
        getRecord.transactions.push(createTrans("withdraw", JSON.parse(req.params.amount)));
        db.get('accounts')
          .find({ email: req.params.email })
          .assign({ balance: getRecord.balance,
                    transactions: getRecord.transactions })
          .write();
        console.log(`Account [${ req.params.email }] now has a balance of [${ getRecord.balance }]`);
        res.send(`Account [${ req.params.email }] now has a balance of [${ getRecord.balance }]`);
    }
    // if account does not exist then return error message
    else{
        console.log(`Account [${ req.params.email }] does not exist!`);
        res.send(null);
    }
});

// Return all transactions for account
app.get('/account/transactions/:email', function (req, res) {
    //first check to see if account exists & if so return transaction details
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        getRecord.transactions.push(createTrans("transactions", 0));
        db.get('accounts')
          .find({ email: req.params.email })
          .assign({ transactions: getRecord.transactions })
          .write();
        console.log(getRecord.transactions);
        res.send(getRecord.transactions);
    }
    // if account does not exist then return error message
    else{
        console.log(`Account [${ req.params.email }] does not exist!`);
        res.send(null);
    }  
});

// Return account balance based on email
  // app.get('/account/get/:email', function (req, res) { - changed app get route to get /account/balance  
app.get('/account/balance/:email', function (req, res) {
    //first check to see if account exists & if so return success message
    var getRecord = findRecord(req.params.email);
    if (getRecord){
        getRecord.transactions.push(createTrans("get", 0));
        db.get('accounts')
          .find({ email: req.params.email })
          .assign({ transactions: getRecord.transactions })
          .write();
        console.log(`Account [${ req.params.email }] has a balance of [${ getRecord.balance }]`);
        res.send(`Account [${ req.params.email }] has a balance of [${ getRecord.balance }]`);
    }
    // if account does not exist then return error message
    else{
        console.log(`Account [${ req.params.email }] does not exist!`);
        res.send(null);
    }
});

// Return data for all accounts
app.get('/account/all', function (req, res) {
    console.log (db.get('accounts').value());
    res.send (db.get('accounts').value());
});
