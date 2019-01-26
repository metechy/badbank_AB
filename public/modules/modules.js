var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>

  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Welcome to the Bank</h5>
  </div>
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Create a new account</h5>
    <input type="input" id="addName" placeholder="name"><br>
        <input type="input" id="addEmailAddress" placeholder="email"><br>
        <input type="input" id="addPassword" placeholder="pwd"><br><br>
        <button type="button" class="btn btn-info" onclick="create()">Register</button>
  </div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Login to your account</h5>
     <input type="input" id="addEmailAddress" placeholder="email"><br>
        <input type="input" id="addPassword" placeholder="pwd"><br><br>
        <button type="button" class="btn btn-info" onclick="login()">Login</button>
  </div>
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Deposit Amount</h5>
         <input type="input" id="addEmailAddress" placeholder="email"><br>
        <input type="input" id="addAmount" placeholder="amt"><br><br>
        <button type="button" class="btn btn-info" onclick="deposit()">Deposit</button>
  </div>
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Withdraw Amount</h5>
        <input type="input" id="addEmailAddress" placeholder="email"><br>
        <input type="input" id="addAmount" placeholder="amt"><br><br>
        <button type="button" class="btn btn-info" onclick="withdraw()">Withdraw</button>
  </div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">List of Transactions</h5>
     <input type="input" id="addEmailAddress" placeholder="email"><br>
    <button type="button" class="btn btn-info" onclick="transactions()">Get Transactions</button>
  </div>
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Balance Info</h5>
      <input type="input" id="addEmailAddress" placeholder="email"><br>
        <button type="button" class="btn btn-info" onclick="balance()">Get Balance</button>
  </div>
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
    <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link" onclick="loadBadBank()">BadBank</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadCreateAccount()">CreateAccount</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadLogin()">Login</a>
      </li>
   <li class="nav-item">
        <a class="nav-link" onclick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadTransactions()">Transactions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onclick="loadAllData()">AllData</a>
      </li>
    </ul>
  </div>

</div>
<div class="card-body">
    <h5 class="card-title">Showing All Data</h5>
     <input type="input" id="addEmailAddress" placeholder="email"><br>
    <button type="button" class="btn btn-info" onclick="allData()">Get All Data</button>
  </div>
`;

var stat  = document.getElementById('status');
var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');

if (navigation.innerHTML == '') {
    navigation.innerHTML = ui.navigation;
}

var loadBadBank = function(){
    navigation.innerHTML = ui.navigation;
     stat.innerHTML = '';
};
var loadCreateAccount = function(){
    navigation.innerHTML = ui.createAccount;
    stat.innerHTML = '';
};

var loadLogin = function(){
    navigation.innerHTML = ui.login;
    stat.innerHTML = '';
     
};

var loadDeposit = function(){
    navigation.innerHTML = ui.deposit;
    stat.innerHTML = '';
};

var loadWithdraw = function(){
    navigation.innerHTML = ui.withdraw;
    stat.innerHTML = '';
};

var loadTransactions = function(){
    navigation.innerHTML = ui.transactions;
    stat.innerHTML = '';
};

var loadBalance = function(){
    navigation.innerHTML = ui.balance;
    stat.innerHTML = '';
};

var defaultModule = function(){
    navigation.innerHTML = ui.default;
    stat.innerHTML = '';
};

var loadAllData = function(){
    navigation.innerHTML = ui.allData;
    stat.innerHTML = '';
};


