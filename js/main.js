const randomBetween = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}

const setNewColor = () => {
    const rgb = "rgb(" + randomBetween(0,255) + "," + randomBetween(0,255) + "," + randomBetween(0,255) + ")" ;
    console.log(rgb)
    return rgb
}

const answer = setNewColor();
document.querySelector("#rgbValue").textContent = answer;

const options = Array.from(document.querySelectorAll(".color-option"));
console.log(options);

const answerIndex = randomBetween(0, 2);

for (let i = 0; i < options.length; i++){
    if (i === answerIndex){
        options[i].style.backgroundColor = answer ;
        options[i].addEventListener('click', win);

    }
    else {
        options[i].style.backgroundColor = setNewColor();
        options[i].addEventListener('click', lose);
    }
}

const win = () => {
    document.getElementById("#rgbValue").innerHTML = "Cozy Vibess, Goodjob!!";
    document.getElementById("#rgbValue").style.color="light purple";
}

const lose = () => {
    document.getElementById("#rgbValue").innerHTML = "Go back to CLASS!!";
    document.getElementById("#rgbValue").style.color="red";
}