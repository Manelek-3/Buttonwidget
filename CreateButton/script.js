//get theme and token
var scripts = document.getElementsByTagName("script");
var Theme = scripts[scripts.length - 1].getAttribute("data-theme");
var Token = scripts[scripts.length - 1].getAttribute("data-token");
console.log(Token);
// 1. Create the div
//Total button
var Button = document.createElement("Div");
Button.setAttribute('id',"div_Button_light");

//add css
Button.style.width = "fit-content";
Button.style.display = "flex";
Button.style.gap = "10px";
Button.style.borderRadius = "5px";
Button.style.padding = "10px";
if(Theme == "light"){
  Button.style.border = "solid";
  Button.style.borderColor = "rgb(230,230,230)";
  Button.style.borderWidth = "3px";
  Button.style.backgroundColor = "rgb(255, 255, 255)";  
}
else {
  Button.style.backgroundColor = "rgb(40, 40, 40)";  
}


// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(Button);

//Image section of button
var DivL = document.createElement("Div");
DivL.id = "div_img";
DivL.style.alignSelf = "center";
Button.appendChild(DivL);

//Image
var image = document.createElement("img");
image.src = "https://cdn.fruitask.com/Icon.png ";

//add image to section
DivL.appendChild(image);

//Right section of button
var DivR = document.createElement("Div");
DivR.setAttribute('id',"div_Right_light");

//add css
DivR.style.width = "-webkit-fill-available";
DivR.style.display = "flex";
DivR.style.flexDirection = "column";
DivR.style.alignItems = "center";
DivR.style.justifyContent = "center";
Button.appendChild(DivR);

//Right Top text of button
var textFP = document.createElement("P");
textFP.setAttribute('id',"p_top_light");

//add css
textFP.style.fontSize = "17px";
textFP.style.margin = "initial";
if(Theme == "light"){
  textFP.style.color = "rgb(6,150,211)";
}
else {
  textFP.style.color = "rgb(158,180,34)";
}

var textF = document.createTextNode("100K visitors monthly");
textFP.appendChild(textF);
DivR.appendChild(textFP);


//Right Bottom text of button
var textSP = document.createElement("P");
textSP.setAttribute('id',"p_bottom_light");
//add css
textSP.style.fontWeight = "700";
textSP.style.fontSize = "21px";
textSP.style.margin = "initial";
if(Theme == "light"){
  textSP.style.color = "rgb(0,0,0)";
}
else {
  textSP.style.color = "rgb(255,255,255)";
}
var textS = document.createTextNode("fruitask Analytics");
textSP.appendChild(textS);
DivR.appendChild(textSP);

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