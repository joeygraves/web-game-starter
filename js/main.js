const randomBetween = (min, max) => {
    min + Math.floor(Math.random() * (max - min + 1));
}

const rgb = "rgb(" + randomBetween(0,255) + "," + randomBetween(0,255) + "," + randomBetween(0,255) + ")" ;
