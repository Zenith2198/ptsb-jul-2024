# Jeopardy Game Part 2

In this project, we will be completing the functionality for our Jeopardy / quiz game utilizing what we learned about Javascript!

The game of Jeopardy consists of several players that compete to earn points by selecting questions of varying points values from a board. The board is a 6 X 6 square with each column representing a category, **and** the first row containing the titles of each category, **and** every row after being increasingly difficult questions (with correspondingly higher point values) for their categories

You will be given placeholder data for this project in the form of an array of objects.

## Stories

### Ready, Set, Go!

- **Given** the players are on the landing page

- **When** one player clicks the 'Start Game' button

- **Then** the players are redirected to the Round 1 page - DONE!!!! Do not need to do anything!

### Start the Game

- **Given** the players have been redirected to the Round 1 page

- **When** the page loads

- **Then** there is a notification that it is player 1's turn to choose
//alert box!! Is a function that takes the arguement of a string
alert("string)
  - **And** the "Guess", "Pass", and "Round 2" buttons are disabled
  //disabled is a property!  - go look for the disable property, all three buttons!

### Select a Question

- **Given** an empty board, and player 1 is currently up

- **When** player 1 selects a card
//On clikc of button, 

- **Then** the score on the card is replaced by a question
//card flips  to the question! HOW???

  - **And** the "Submit Answer" button is enabled //diabled = false! - diabled property! LOOK IT UP!
  - **And** the "Pass Question" button is enabled

### Pass a Question

- **Given** a question has been chosen 
//On click for class

- **When** the user clicks on the "Pass Question" button //PASS = Do not answer the question! 

- **Then** player 2 gets an opportunity to answer the question
  - **And** the notification area changes to player 2's turn

### Answer a Question Correctly

- **Given** a question has been chosen

- **When** the player submits an answer
  - **And** the answer is correct - IF Anser = question answer=== true

- **Then** the game awards the player the amount of points that were on the card
  - **And** the card is blanked out
  - **And** the current player does not change

### Answer a Question Incorrectly

- **Given** a question has been chosen

- **When** the player submits an answer
  - **And** the answer is incorrect ///if answer is false, subtract points from player
  score =- points
  score = score -points

- **Then** the game subtracts the point total from the player's score
  - **And** the other player gets a chance to answer the question
  - **And** if no one guesses correctly the original player gets to choose a new question

### Score Board 
//Upodate score when points are added or subtrzctged
//change scores text content
append element
- **Given** the game has been started

- **When** the score changes

- **Then** the game should display each player's current score on the page

### Only Allow One Question

- **Given** a card has already been selected
//card.add.event.listener

- **When** the player tries to pick a new card

- **Then** the question does not change
  - **And** the game alerts the player that they must answer, or pass the question

### End Round 1

- **Given** that the score of one user reaches 15,000 points.
  - **Or** the board has been cleared ////Do this, no more availabe questions, clear the board
  if board = 0
  alert round 2 is availabe 
  enable round two button!

- **Then** the game alerts the players to move on to Round 2.
  - **And** the "Round 2" button becomes enabled
  - **And** the "Round 2" button navigates to the Round 2 page.

*Hint: You can use query parameters in the URL to pass score information between pages*

### Round 2

- **Given** the players are on the Round 2 Page

- **Then** the players scores are the same as they were at the end of Round 1.
  - **And** the game logic behaves as Round 1.
  - **And** the "Final Round" button is disabled

### End Round 2

- **Given** that the score of one user reaches 30,000 points.
  - **Or** the board has been cleared

- **Then** the game alerts the players to move on to the Final Round.
///Go to round END!
  - **And** the "Final Round" button becomes enabled
  - **And** the "Final Round" button navigates to the Final Round page.

### Final Round

- **Given** the players are on the Final Round page

- **Then** they should be presented with a category
  - **And** prompted to make a wager up to their maximum point total
  //prompt to bet!!!!
  Check and see if points..idk
  add ventlistern on click

### Let's Make a Wager!

- **Given** we're on the Final Round page

- **When** all players have made a wager

- **Then** the question is revealed
//after replace final question box with the question
  - **And** all players get a chance to answer the question before the answer is revealed

### Winning the Game

- **Given** all players have answered the final question

- **When** the last answer is submitted

- **Then** the amount wagered is added or subtracted from the total score
  - **And** the game should notify the users who won based on the final score

  //Compare anser
  tally score
  win....

## Icebox

### Say my Name!

- **Given** the the user is on the landing page

- **When** the user clicks "Start Game"

- **Then** the game should allow the user(s) to set their player names
  - **And** should use those names throughout the game

### Random Questions

- **Given** a game has been started

- **When** the board is generated

- **Then** the board has questions different from the placeholder data

### Daily Double

- **Given** a game is started

- **When** the board is generated

- **Then** two random questions should be set as the "Daily Double" and are worth twice the amount of points on their cards

### Try to Make Fetch Happen

- **Given** a game is started

- **When** the board is generated

- **Then** the board has questions fetched from an external API

