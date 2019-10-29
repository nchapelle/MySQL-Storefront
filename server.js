var inquirer = require("inquirer");
var userName = null;


console.log("\nWelcome to AMAZONOLAN");


let loginMenu = () => {
    inquirer.prompt([{
        type: "list",
        message: "Main menu:",
        choices: [
            "Login",
            "Sign Up",
            "View Products",
            "Exit"
        ],
        name: "choice"
    }]).then((inquiry) => {
        console.log(inquiry.choice + " mysql db work here!")
    })
}
let loggedInMenu = () => {
    inquirer.prompt([{
        type: "list",
        message: "Welcome, " + userName,
        choices: [
            "Login",
            "Sign Up",
            "View/Order Products",
            "Order History",
            "Exit"
        ],
        name: "choice"
    }]).then((inquiry) => {
        switch (inquiry.choice) {
            case "Login": {
                var query = "SELECT "
            }
        }
        console.log(inquiry.choice + " mysql db work here!")
    })
}
// let productsMenu = () => {

// }
if (userName === null) {
    loginMenu();
} else {
    loggedInMenu();
}