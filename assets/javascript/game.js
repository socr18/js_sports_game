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
let tonew
let tonel
let ttwol
let ttwow
let bothties

const resetButton = document.querySelector('#reset-button')
const numResets = document.querySelector('#num-resets')
const teamonewins = document.querySelector(".team-one-wins")
const teamtwowins = document.querySelector(".team-two-wins")
const teamoneloss = document.querySelector(".team-one-losses")
const teamtwoloss = document.querySelector(".team-two-losses")
const ties = document.querySelectorAll(".ties")

resetButton.addEventListener("click", function () {
    // Show the Winner of the Game

    if (Number(teamOneGoalsScored.innerHTML) > Number(teamTwoGoalsScored.innerHTML)) {
        tonew = Number(teamonewins.innerHTML)
        tonew ++
        teamonewins.innerHTML = tonew
        ttwol = Number(teamtwoloss.innerHTML)
        ttwol ++
        teamtwoloss.innerHTML = ttwol
    } else if (Number(teamOneGoalsScored.innerHTML) < Number(teamTwoGoalsScored.innerHTML)) {
        ttwow = Number(teamtwowins.innerHTML)
        ttwow ++
        teamtwowins.innerHTML = ttwow
        tonel = Number(teamoneloss.innerHTML)
        tonel ++
        teamoneloss.innerHTML = tonel
    } else {
        bothties = Number(ties.innerHTML)
        bothties ++
        ties.innerHTML = bothties
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