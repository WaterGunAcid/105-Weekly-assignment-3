function cpuChoice(){
    const choice = ["Rock", "Paper", "Scissors"]
    const random = Math.floor(Math.random()*choice.length)
    return choice[random]
}

function showChoice(){
    const show = cpuChoice()
    document.getElementById("result").textContent= `Computer: ${show}`
}