let homePts=document.getElementById('team1-pts')
let homeCount=0;
let guestPts=document.getElementById('team2-pts')
let guestCount=0;

let team1TO = document.getElementById('team1TO')
let team1TOCount = 0;

let team2TO = document.getElementById('team2TO')
let team2TOCount = 0;

let team1TF = document.getElementById('team1TF')
let team1TFCount = 0;

let team2TF = document.getElementById('team2TF')
let team2TFCount = 0;

let period = document.getElementById('period')
let periodCount = 0;

function addPeriod() {
    periodCount=periodCount+1
    period.innerText=periodCount  
}

function minusPeriod() {
    periodCount=periodCount-1
    period.innerText=periodCount  
}

function team1TFAdd() {
    team1TFCount=team1TFCount+1
    team1TF.innerText=team1TFCount  
}
function team2TFAdd() {
    team2TFCount=team2TFCount+1
    team2TF.innerText=team2TFCount  
}

function team1TFMinus() {
    team1TFCount=team1TFCount-1
    team1TF.innerText=team1TFCount  
}
function team2TFMinus() {
    team2TFCount=team2TFCount-1
    team2TF.innerText=team2TFCount  
}


function team1TimeOutAdd() {
    team1TOCount=team1TOCount+1
    team1TO.innerText=team1TOCount  
}
function team2TimeOutAdd() {
    team2TOCount=team2TOCount+1
    team2TO.innerText=team2TOCount  
}

function team1TimeOutMinus() {
    team1TOCount=team1TOCount-1
    team1TO.innerText=team1TOCount  
}
function team2TimeOutMinus() {
    team2TOCount=team2TOCount-1
    team2TO.innerText=team2TOCount  
}

function team1AddPoints1() {
    homeCount=homeCount+1
    homePts.innerText=homeCount    
}

function team1AddPoints2() {
    homeCount=homeCount+2
    homePts.innerText=homeCount
}

function team1AddPoints3() {
    homeCount=homeCount+3
    homePts.innerText=homeCount
}
function team1MinusPoints() {
    homeCount=homeCount-1
    homePts.innerText=homeCount
}
function team1ResetPoints() {
    homePts.innerText= 0;
}

function team2AddPoints1() {
    guestCount=guestCount+1
    guestPts.innerText=guestCount    
}

function team2AddPoints2() {
    guestCount=guestCount+2
    guestPts.innerText=guestCount
}

function team2AddPoints3() {
    guestCount=guestCount+3
    guestPts.innerText=guestCount
}

function team2MinusPoints() {
    guestCount=guestCount-1
    guestPts.innerText=guestCount
}
function team2ResetPoints() {
    guestPts.innerText= 0;
}


let team_name1 = document.getElementById('team1-name');
let inputT1 = document.getElementById('t1name');
let team_name2 = document.getElementById('team2-name');
let inputT2 = document.getElementById('t2name');

function t1SetName(){
    inputT1.setAttribute('value', '');
    team_name1.innerHTML = inputT1.value;

}

function t2SetName(){
    inputT2.setAttribute('value', '');
    team_name2.innerHTML = inputT2.value;

}

// Timer

let tCount = document.getElementById('timer_count');
let gTimer = document.getElementById('inputTimer');


let countdownTimerElementDisplay = document.getElementById('timer_count');
const startingMinutes = 10;
let time = startingMinutes * 60;
let isPaused = true;

var timer = setInterval(() => {
    if(!isPaused) {
        
        const minute = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownTimerElementDisplay.textContent = `${minute}:${seconds}`;
        time--;
        
    }
}, 1000);



function setTimer(){
    gTimer.setAttribute('value', 'defaultValue');
    tCount.innerHTML = gTimer.value;
    pauseTimer();
    pauseShotClock();
    resetShotClock();
}

function startGame(){
    startTimer();
    resetTimer();
    pauseShotClock();
}

function startTimer(){
    isPaused = false;
    startShotClock();

}

function pauseTimer(){
    isPaused = true;
    pauseShotClock();
}

function resetTimer() {
    countdownTimerElementDisplay.textContent = '10:00';
    time = startingMinutes * 60;
    isPaused = true;
}

//Shotclock

let countdownTimerElementDisplay1 = document.getElementById('shotClock_count');
const startingMinutes1 = .4
var reset14 = 14
let time1 = startingMinutes1 * 60;

let isPaused1 = true;

var timer1 = setInterval(() => {
    if(!isPaused1) {
        
        const minute1 = Math.floor(time1 / 60);
        let seconds1 = time1 % 60;

        seconds1 = seconds1 < 10 ? '0' + seconds1 : seconds1;

        countdownTimerElementDisplay1.textContent = `${seconds1}`;
        time1--;
        
    }
}, 1000);

function startShotClock(){

    isPaused1 = false;
}

function pauseShotClock(){
    isPaused1 = true;
}

function resetShotClock() {
    countdownTimerElementDisplay1.textContent = '24';
    time1 = startingMinutes1 * 60;
    isPaused1 = false;
}

function resetShotClock14() {
    countdownTimerElementDisplay1.textContent = '14';
    time1 = reset14 * 60 / 60;
    isPaused1 = false;
}


    function rightArrow(){
       var rightArrow = document.getElementById('right-arrow')
        var leftArrow = document.getElementById('left-arrow')
        rightArrow.style.display = "block";
        leftArrow.style.display = "none";
    }
    function leftArrow(){
        var rightArrow = document.getElementById('right-arrow')
        var leftArrow = document.getElementById('left-arrow')
        document.getElementById('left-arrow')
        rightArrow.style.display = "none";
        leftArrow.style.display = "block";
    }
