//random background-image  : linear-gradient with animation
const colorCode = [
    'linear-gradient(to right, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to right, #fad0c4 0%, #ffd1ff 100%)',
    'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)'
]
const background = document.querySelector(".background");
const loginFormClone = document.querySelector("#login");

function savedColor() {
    return localStorage.getItem('colorcode');
}

function colorDecision() {
    const randNum = Math.floor(Math.random() * 4);
    console.log(background, randNum)
    background.style.backgroundImage = colorCode[randNum];
    localStorage.setItem('colorcode', colorCode[randNum])
}

loginFormClone.addEventListener('submit', colorDecision)

if (savedColor()) {
    background.style.backgroundImage = savedColor();
}



