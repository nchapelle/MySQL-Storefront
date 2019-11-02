const inquirer = require("inquirer");
const mysql = require("mysql"); 
const Ctable = require('console.table');
// let PORT = 8080; // process.env.PORT || 8080;
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Nrc51489!",
    database: "amazonolan"
  });
connection.connect(function(err) {
if (err) throw err;
console.log("connected as id " + connection.threadId + "\n");
readProducts();
});

  
// var userName = null;


//this is to display all data from pdts table (#5)
function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM Products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log("\nWelcome to AMAZONOLAN");
      console.table(res);
      customerPurchase();

    });
  }

function customerPurchase(){
  inquirer.prompt([
    {
      type: "input",
      name: "purchaseID",
      message: "Serious buyers only, please submit the item ID you wish to purchase",
      
    },
    {
      type: "input", 
      name: "purchaseQTY",
      message: "How Many do you want?"
    }

  ]).then(function (purchasing){
    requestproduct(purchasing.purchaseID, purchasing.purchaseQTY)
  });

};
  //#6 ask user to prompt 2 msgs, id and quantity
  //once you find the id check the userinput amt <quanity, if true updated the quanity

  function requestproduct(id, userquantity){
    
        console.log("Thank You for your purchase.\nUpdating our stock...");
        var query = connection.query(
          "UPDATE Products SET quantity=quantity-"+parseInt(userquantity)+" WHERE item_ID="+id,
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            readProducts();
          }
        );
    
      
  }
  // connection.end();

// let signup = function(userName, userPassword){
//     var query = connection.query(
//         "INSERT INTO Customers SET ?",
//         {
//           UserName: userName,
//           password: userPassword,
//           isLogged: false
//         },
//         function(err, res) {
//           if (err) throw err;
//           console.log(res.affectedRows + " user inserted!\n");
//           // Call updateProduct AFTER the INSERT completes
//         //   updateProduct();
//         }
//     );
//     };
// let loggedIn = function(userName, userPassword){
//     // check to see if username and password is valid
    
//     // if valid change isLogged to true
//     // show information for joined table
//     if (isLogged){

//     }
// }


// signup("BobRoss", "happytrees");
// let loginMenu = () => {
//     inquirer.prompt([{
//         type: "list",
//         message: "Main menu:",
//         choices: [
//             "Login",
//             "Sign Up",
//             "View Products",
//             "Exit"
//         ],
//         name: "choice"
//     }]).then((inquiry) => {
//         console.log(inquiry.choice + " mysql db work here!")
//     })
// }
// let loggedInMenu = () => {
//     inquirer.prompt([{
//         type: "list",
//         message: "Welcome, " + userName,
//         choices: [
//             "Login",
//             "Sign Up",
//             "View/Order Products",
//             "Order History",
//             "Exit"
//         ],
//         name: "choice"
//     }]).then((inquiry) => {
//         switch (inquiry.choice) {
//             case "Login": {
//                 var query = "SELECT "
//             }
//         }
//         console.log(inquiry.choice + " mysql db work here!")
//     })
// }
// let productsMenu = () => {

// }
// if (userName === null) {
//     loginMenu();
// } else {
//     loggedInMenu();
// }