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

    while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }
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
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    
    
        } 
    } 
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        //Lets players know what round they are in
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }   
            }
        } 
        else {
            window.alert("You have been defeated! Game OGRE!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0){
        window.alert("NICE JOB! You survived. You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle!");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert ("Thanks for playing Robot Gladiators!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert ("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
        } else {
                window.alert("You do not have enough money.");
        }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert ("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
        } else {
                window.alert("You do not have enough money.");
        }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option. Try Again.");
            shop();
            break;
    }
};
startGame();

