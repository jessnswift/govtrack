const repArticle = document.querySelector("article");

// create a new h4 element 
var newH4 = document.createElement("h4");
// creating a text node
var newMission = document.createTextNode("Mission Statement");
newH4.appendChild(newMission);
// create a new paragraph element 
var newParagraph = document.createElement("p");
// creating a text node for paragraph
var newMissionStatement = document.createTextNode("Make America Great Again!");

repArticle.appendChild(newH4);
repArticle.appendChild(newMissionStatement);

var congressionalDistrict = document.createAttribute("congressional-district");
congressionalDistrict.value = "1234";
repArticle.setAttributeNode(congressionalDistrict);
console.log(repArticle);
