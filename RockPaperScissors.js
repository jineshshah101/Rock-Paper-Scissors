// Rock Paper Scissors
// In Rock Paper Scissors we want some things
// Need a human choice and a computer choice
// If someone chooses rock then there should be an approrpriate response where it's a win, a loss, or a tie
// The winner should be determine by number format
// 0 means lose, 1 means win, 0.5 means tie

// The main function that is connected to the html where everything will happen
// Have playerchoice which is your choice and the ai choice which is called to another function
// Get the results
// Have a message to explain the results
// Show the images in the html portion here on javascript

function RPSbattle(yourChoice){
    var playerChoice, aiChoice;
    playerChoice = yourChoice.id;
    aiChoice = numberChoice(randRPSInt());
    results = decideResult(playerChoice,aiChoice);
    message = writtenMessage(results);
    RPSdesign(yourChoice.id, aiChoice, message);
}

// Calculating the random choice for the win or losses depending on the number
// Makes sure its rounded down
// Will be between 0 and 2 for the number but sinced its rounded down will only get 0, 1, 0.5

function randRPSInt(){
    return Math.floor(Math.random() * 3);
}

// Returns the number choice that has been recieved from the random RPS function and selects either
// Rock paper or scissors accordingly

function numberChoice(number){
    return ['Rock', 'Paper', 'Scissors'][number];
}

// This function decides the winner based on the following choices
// If rock was chosen it beats scissors, loses to paper, and ties with rock
// 1 means win, 0 means lose, 0.5 means tie
// If paper was chosen it beats rock, loses to scissors, and ties with paper
// If scissors was chosen it beats paper, loses to rock, and ties with scissors
// Once the decision has been made it returns the result of the competition

function decideResult(playerChoice, botChoice){
    var RPSScenarios = {
        'Rock': {'Scissors': 1, 'Paper': 0, 'Rock': 0.5},
        'Paper': {'Rock' : 1, 'Scissors' : 0, 'Paper': 0.5},
        'Scissors': {'Paper' : 1, 'Rock' : 0, 'Scissors': 0.5}
    };
    var playerScore = RPSScenarios[playerChoice][botChoice];
    var aiScore = RPSScenarios[botChoice][playerChoice];
    return (playerScore, aiScore);
}

// This function gives an actual message who won the game
// Either returns a lost, a tie, or a win, based on the number aka choice the player made

function writtenMessage([playerScore, aiScore]){
    if(playerScore === 0){
        return {'message' : 'Lost', 'Color' : 'red'};
    } else if(playerScore === 0.5){
        return{'message' : 'Tie', 'Color' : 'yellow'};
    } else if (playerScore === 1){
        return{'message' : 'Win', 'Color' : 'green'};
    }
}

// This is the design portion of the fucntion
// First getting the rock, paper, scissors sources from html
// After that we removed everything from the page so that an image can be chosen
// Giving each image and message inside its own div
// Adding html code to get the image and adding css to design the images with boxshadow
// Appending it so that the image would show up

function RPSdesign(playerImageChoice, botImageChoice, writtenMessage){
    var imageScenarios = {
        'Rock': document.getElementByID('Rock').src,
        'Paper': document.getElementByID('Paper').src,
        'Scissors': document.getElementByID('Scissors').src
    }

    document.getElementByID('Rock').remove();
    document.getElementByID('Paper').remove();
    document.getElementByID('Scissors').remove();

    var playerDiv = document.createElement('div');
    var aiDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    playerDiv.innerHTML = "img src='" + imageScenarios[playerImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + writtenMessage['color'] + "; font-size: 60 px; padding: 30px;'>" + writtenMessage['message'] + "</h1>"
    aiDiv.innerHTML = "img src='" + imageScenarios[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(248, 38, 24, 1);'>"

    document.getElementByID('flex rps').appendChild(playerDiv);
    document.getElementByID('flex rps').appendChild(messageDiv);
    document.getElementByID('flex rps').appendChild(aiDiv);
}
