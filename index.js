// setup server
// YOUR CODE
var express = require('express');
var app     = express();

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));

// start server
// -----------------------
app.listen();

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

app.get('/account/deposit/:email/:amt', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    var useremail = req.params.email;
    var amt = req.params.amt;
    var dt = new Date();
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
        res.send(null);  
    }
    else {
        
        var currentbalance = userfound.balance;
        newbalance = Number(currentbalance) + Number(amt);
        //console.log(amt);
        //console.log(newbalance);
         var txn = {activity : "deposit", activityamount: Number(amt), updatedbalance: Number(newbalance), Date: dt.toDateString()};
        var record = db.get('accounts').find({email:useremail}).value().transactions;
       record.push(txn);      
       db.get('accounts').find({email:useremail})
       .assign({balance : newbalance})
       .write();
        res.send(record);    
    }
    

    // If success, return account object    
    // If fail, return null
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var useremail = req.params.email;
    var amt = req.params.amt;
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
        res.set('balance',0);
        res.send(null); 
    }
    else {
        var depositamt = userfound.balance;
        res.set('balance',depositamt);
        res.send(userfound);    
    }
});



app.get('/account/withdraw/:email/:amt', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var useremail = req.params.email;
    var amt = req.params.amt;
     var dt = new Date();
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
         
        res.set('result',0);
        res.send(null); 
    }
    else if (amt > userfound.balance){
        res.set('result',1);
        res.send(userfound); 
    }
    else {
         var currentbalance = userfound.balance;
        newbalance = Number(currentbalance) - Number(amt);
        //console.log(amt);
        //console.log(newbalance);
         var txn = {activity : "withdraw", activityamount: Number(amt), updatedbalance: Number(newbalance), Date: dt.toDateString()};
        var record = db.get('accounts').find({email:useremail}).value().transactions;
       record.push(txn);  
       db.get('accounts').find({email:useremail})
       .assign({balance : newbalance})
       .write();
        res.set('result',2);
        res.send(userfound);    
    }
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
     var useremail = req.params.email;
    var amt = req.params.amt;
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
        res.send(null); 
    }
    else {
        res.send(userfound.transactions);    
    }
});

app.get('/account/all/:email', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
         var useremail = req.params.email;
    var amt = req.params.amt;
    var userfound = db.get('accounts').find({email:useremail}).value();
    if (userfound == null){
        res.send(null); 
    }
    else {
        res.send(userfound);    
    }
});
