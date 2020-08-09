let stopWatch = document.querySelector('h1');
let laps = document.querySelector('ul');
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer;

// To get the start button working
function start() {
    if (!timer){
        timer = setInterval(run, 10);
    }
}

function run() {
    stopWatch.textContent = getTimer();

    ms++;

    if(ms == 100){
        ms = 0;
        s++;
    }

    if(s == 60){
        s = 0;
        m++;
    }

    if(m == 60){
        m = 0;
        h++;
    }
}

// To get the pause button working
function pause() {
    clearInterval(timer);
    timer = false;
}

// To get the reset button working
function reset() {
    clearInterval(timer);
    timer = false;
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    stopWatch.textContent = getTimer();
}

// To reset laps
function resetLaps() {
    laps.innerHTML = '';
}

// To get timer of the stopwatch
function getTimer() {
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

// To get the lap button working
function lap() {
    if(timer){
        let li = document.createElement('li');
        li.innerText = getTimer();
        laps.append(li);
    }
}