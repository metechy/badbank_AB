// setup server
// YOUR CODE
var express = require('express');
var app     = express();

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));

// start server
// -----------------------
app.listen(3001, function(){
    console.log('Running on port 3001');
});

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// setup data store
// YOUR CODE
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);


// required data store structure
// YOUR CODE
db.defaults({accounts:[] }).write();


app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    var account = {
        "name" : req.params.name,
        "email"    : req.params.email,
        "balance"   : 0,
        "password" : req.params.password,
        "transactions" : []
    };
    db.get('accounts').push(account).write();
    console.log(db.get('accounts').value());   
    res.send("success");
    // return success or failure string
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    var useremail = req.params.email;
    var userpwd = req.params.password;
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
        res.send(null);  
    }
    else {
        if (userfound.password == userpwd){
        res.send(userfound);    
        }
        else {
        res.send(null);    
        }
    }
    

    // If success, return account object    
    // If fail, return null
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
});
