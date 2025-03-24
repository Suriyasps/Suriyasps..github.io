const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/furniq.png") {
    myImage.setAttribute("src", "images/furniq2.png");
  } else {
    myImage.setAttribute("src", "images/furniq.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("p");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Furniq is cool, ${myName}`;
    }
  }
  
  myButton.addEventListener("click", () => {
    setUserName();
  });
    