var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = 'Roberto'
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alerts the players that they are starting the round
    window.alert('Welcome to Robot Gladiators!')

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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
fight();
