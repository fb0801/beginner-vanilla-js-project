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

    if (timespan <=-day) {
        timeLeft.innerHTML = "Hope you had nice Birthday!"
    }
    if (timespan <= 0) {
        timeLeft.innerHTML ="Happy Birthday"
        clearInterval(timerId)
        return
    }

    const days = math.floor(timespan /day )
    const hours = math.floor((timespan % day) / hour)
    const minutes =math.floor((timespan % hour) /minute)
    const seconds = math.floor((timespan % minute) / second)

    timeLeft.innerHTML = days + "days" + hours  +"hours" + minutes + "min" + seconds + "seconds"

}

timerId = setInterval(countDown,second)