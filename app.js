let stopWatch = document.querySelector('h1');
let laps = document.querySelector('ul');
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let timer;

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

function pause() {
    stopTimer()
}

function reset() {
    clearInterval(timer);
    timer = false;
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    stopWatch.textContent = getTimer();

    resetLaps();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function lap() {
    if(timer){
        let li = document.createElement('li');
        li.innerText = getTimer();
        laps.append(li);
    }
}

function resetLaps() {
    laps.innerHTML = '';
}