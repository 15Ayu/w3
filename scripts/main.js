
// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん`;
}

myButton.onclick = function() {
  setUserName();
}

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
  
};
