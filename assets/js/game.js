var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Alerts the players that they are starting the round
window.alert('Welcome to Robot Gladiators!')

var fight = function(enemyName) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    //Player is choosing to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    
    //Subtract the value of 'playerAttack' from value of 'enemyHealth' and use result update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console to know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //Subtract the value of 'enemyAttack' from value of 'playerHealth' and use result update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console to know it worked
    console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    //Player is choosing to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // Confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
