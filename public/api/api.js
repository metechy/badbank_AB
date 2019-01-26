
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
    //alert ("1");
    var status  = document.getElementById('status');
    var name = document.getElementById('addName').value;
    var email = document.getElementById('addEmailAddress').value;
    var pwd = document.getElementById('addPassword').value;
    var url = '/account/create/' + name + '/' + email + '/' + pwd;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify('Successful');
            }

        });
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var pwd = document.getElementById('addPassword').value;
    var url = '/account/login/' + email + '/' + pwd;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.body == null){
                status.innerHTML = JSON.stringify("Invalid Crendentials");    
                }
                else {
                status.innerHTML = JSON.stringify("Login Successful");
                }
            }

        });
      
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var amt = document.getElementById('addAmount').value;
    var url = '/account/deposit/' + email + '/' + amt;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.body == null){
                status.innerHTML = JSON.stringify("User not found");    
                }
                else {
                status.innerHTML = JSON.stringify("deposit Successful");
                }
            }

        });
      
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var amt = document.getElementById('addAmount').value;
    var url = '/account/withdraw/' + email + '/' + amt;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.get('result') == 0){
                status.innerHTML = JSON.stringify("User not found");    
                } 
                else if (res.get('result') == 1) {
                status.innerHTML = JSON.stringify("Not sufficient balance");
                }
                else {
                status.innerHTML = JSON.stringify("Withdraw Successful");
                }
            }

        });
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
   var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var url = '/account/transactions/' + email;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.body == null){
                status.innerHTML = JSON.stringify("User not found");    
                } 
                else {
                status.innerHTML = JSON.stringify(res.body);
                }
            }

        });   
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
      var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var url = '/account/get/' + email;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.body == null){
                status.innerHTML = JSON.stringify("User not found");    
                } 
                else {
                status.innerHTML = JSON.stringify(res.get('balance'));
                }
            }

        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
     var status  = document.getElementById('status');
    var email = document.getElementById('addEmailAddress').value;
    var url = '/account/all/' + email;
    //alert (url);

    superagent
        .get(url)

        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                if (res.body == null){
                status.innerHTML = JSON.stringify("User not found");    
                } 
                else {
                status.innerHTML = JSON.stringify(res.body);
                }
            }

        });   
}

