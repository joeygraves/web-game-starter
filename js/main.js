document.querySelector("button").addEventListener("color", setNewColor);

const randomBetween = (min, max) => {
    min + Math.floor(Math.random() * (max - min + 1));
}

//Set background color of div to be new rgb
const setNewColor = () => {
    const rgb = "rgb(" + randomBetween(0,255) + "," + randomBetween(0,255) + "," + randomBetween(0,255) + ")" ;
    console.log(rgb)
}




