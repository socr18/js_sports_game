// Team 1 shots
let teamOneShots
let teamOneGoals

const teamOneAttempts = document.querySelector('#teamone-numshots')
const teamOneShootButton = document.querySelector('#teamone-shoot-button')
const teamOneGoalsScored = document.querySelector('#teamone-numgoals')

teamOneShootButton.addEventListener('click', function () {

    // Number of Shots Taken
    teamOneShots = Number(teamOneAttempts.innerHTML)
    teamOneShots ++
    teamOneAttempts.innerHTML = teamOneShots

    // Goals Scored
    teamOneGoals = Number(teamOneGoalsScored.innerHTML)
    if (Math.random() >= 0.5) {
        teamOneGoals ++
        teamOneGoalsScored.innerHTML = teamOneGoals
    }
})

// Team 2 shots
let teamTwoShots
let teamTwoGoals

const teamTwoAttempts = document.querySelector('#teamtwo-numshots')
const teamTwoShootButton = document.querySelector('#teamtwo-shoot-button')
const teamTwoGoalsScored = document.querySelector('#teamtwo-numgoals')

teamTwoShootButton.addEventListener('click', function () {

    // Number of Shots Taken
    teamTwoShots = Number(teamTwoAttempts.innerHTML)
    teamTwoShots ++
    teamTwoAttempts.innerHTML = teamTwoShots

    // Goals Scored
    teamTwoGoals = Number(teamTwoGoalsScored.innerHTML)
    if (Math.random() >= 0.5) {
        teamTwoGoals ++
        teamTwoGoalsScored.innerHTML = teamTwoGoals
    }
})

// Reset Scores
let resetButtonTimes

const resetButton = document.querySelector('#reset-button')
const numResets = document.querySelector('#num-resets')

resetButton.addEventListener("click", function () {
    // Show the Winner of the Game

    if (Number(teamOneGoalsScored.innerHTML) > Number(teamTwoGoalsScored.innerHTML)) {
        console.log('Team One Won')
    } else if (Number(teamOneGoalsScored.innerHTML) < Number(teamTwoGoalsScored.innerHTML)) {
        console.log('Team Two Won')
    } else {
        console.log('The game ended in a tie!!!')
    }

    teamOneAttempts.innerHTML = 0
    teamOneGoalsScored.innerHTML = 0
    teamTwoAttempts.innerHTML = 0
    teamTwoGoalsScored.innerHTML = 0

    // Add one to reset counter
    resetButtonTimes = Number(numResets.innerHTML)
    resetButtonTimes ++
    numResets.innerHTML = resetButtonTimes

})