// Team 1 shots
let teamOneShots
let teamOneGoals

const teamOneAttempts = document.querySelector('#teamone-numshots')
const teamOneShootButton = document.querySelector('#teamone-shoot-button')
const teamOneGoalsScored = document.querySelector('#teamone-numgoals')
let kicksound = new Audio();
kicksound.src = './assets/sounds/soccer-kick.wav'

teamOneShootButton.addEventListener('click', function () {

    // Play Sound
    kicksound.play()

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

    // Play Sound
    kicksound.play()

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
const teamonewins = document.querySelector('.team-one-wins')
const teamtwowins = document.querySelector('.team-two-wins')
const teamoneloss = document.querySelector('.team-one-losses')
const teamtwoloss = document.querySelector('.team-two-losses')
let ties = document.querySelectorAll('.ties')
let tieval = document.querySelector('.ties')
const gw = document.querySelector('#game-winner')

resetButton.addEventListener("click", function () {
    // Show the Winner of the Game

    if (Number(teamOneGoalsScored.innerHTML) > Number(teamTwoGoalsScored.innerHTML)) {
        tonew = Number(teamonewins.innerHTML)
        tonew ++
        teamonewins.innerHTML = tonew
        ttwol = Number(teamtwoloss.innerHTML)
        ttwol ++
        teamtwoloss.innerHTML = ttwol
        gw.innerHTML = 'Team One Won!!!'
    } else if (Number(teamOneGoalsScored.innerHTML) < Number(teamTwoGoalsScored.innerHTML)) {
        ttwow = Number(teamtwowins.innerHTML)
        ttwow ++
        teamtwowins.innerHTML = ttwow
        tonel = Number(teamoneloss.innerHTML)
        tonel ++
        teamoneloss.innerHTML = tonel
        gw.innerHTML = 'Team Two Won!!!!'
    } else {
        bothties = Number(tieval.innerHTML)
        bothties ++

        // update all ties
        for (let i = 0; i < ties.length; i++) {
            ties[i].innerHTML = bothties
        }
        
        gw.innerHTML = 'Game Ended in a Tie!!!'
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