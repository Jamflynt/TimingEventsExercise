// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);

    setTimeout(() => {
        const div2 = document.querySelector(`#timeout-nesting`);
        const p2 = document.createElement(`p`);
        p2.innerText = `Two`;
        div2.append(p2);
    }, 1000)

}, 2000);

// 3a
let up = 1;
const clock = setInterval(() => {
    console.log(up);
    up++;
}, 1000);
// 3b 
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(clock);
  });

// Bonus 
// 4


const countdown = document.querySelector(`#countdown`)
const p3 = document.createElement(`p`);
p3.innerHTML = `2:00`;
countdown.append(p3);

const startTime = 2;
let time = startTime * 60;

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    countdown.innerHTML = `${minutes}: ${seconds}`
    time --;
}

setInterval(() => {
    updateCountdown();
    if (time <= 0){
        countdown.innerHTML = `TIME IS UP`;
    }
}, 1000);