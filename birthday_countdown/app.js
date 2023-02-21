const timeLeft = document.getElementById("time-left")


const birthday = new Date("08/01/2024")
const second =1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 
let timerId

function countDown(){
    const today = new Date()
    const timespan = birthday - today

    if (timespan <= 0) {
        timeLeft.innerHTML ="Happy Birthday"
        clearInterval(timerId)
    }
}

timerId = setInterval(countDown,second)