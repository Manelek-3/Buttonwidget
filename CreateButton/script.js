// 1. Create the div
//Total button
var Button = document.createElement("Div");
Button.setAttribute('id',"div_Button");


// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(Button);

//Image section of button
var DivL = document.createElement("Div");
DivL.id = "div_img";
Button.appendChild(DivL);

//Image
var image = document.createElement("img");
image.src = "./chat.png";

//add image to section
DivL.appendChild(image);

//Right section of button
var DivR = document.createElement("Div");
DivR.setAttribute('id',"div_Right");
Button.appendChild(DivR);

//Right Top text of button
var textFP = document.createElement("P");
var textF = document.createTextNode("our");
textFP.appendChild(textF);
DivR.appendChild(textFP);

//Right Bottom text of button
var textSP = document.createElement("P");
var textS = document.createTextNode("Team");
textSP.appendChild(textS);
DivR.appendChild(textSP);

//add texts to Right section

//add sections to Button



// 3. Add event handler
Button.addEventListener ("click", function() {
  alert("Our Team");
});

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
}