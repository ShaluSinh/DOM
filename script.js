 //window object
 /*the window object represents an open window in a browser. it is browser's object
 (not js) and is automatically created by web browser.
 It is a global object with lots of properties and methods.*/

 //DOM
 /*when a web page is loaded, the browser creates a Document Object Model
  of the page

  //console.dir(window.document);
  /*window is an object and all function can be call by using the window object
  whether it is console, document,etc.

  console.dir is used to display properties of special object.

  html can be accessed in js by using document object present in window object
  by writing console.dir(window.document).*/
  //DOM is use for dynamic changes in web page

  //DOM Manipulation

  /* Selecting with id
  document.getElementById("myId");

  Selecting with class
  document.getElementByClassName("myClass")

  Selecting with tag
  document.getElementByTagName("p")
  */
 let header=document.getElementById("heading");
 console.dir(header);

 let param=document.getElementsByClassName("para");
 console.dir(param);

 let tagg=document.getElementsByTagName("h1");
 console.dir(tagg);

 let firstel=document.querySelector("h1");
 console.dir(firstel);

 let allel=document.querySelectorAll("h1");
 console.dir(allel);

 //dom manipulation
 /*properties
use to set or update value or fetch any value
 tagName: returns tag for element nodes
 innerText: returns the text content of the element and all its children.
 innerHTML: returns the plain text or html contents in the element.
 textContent: returns textual content even for hidden elements.*/

 firstel.tagName//returns h1
 console.dir(document.body.firstChild);
 console.log(document.querySelector("div"));
 console.log(document.querySelector("div").children);
 console.log(document.querySelector("div").innerText);
 console.log(document.querySelector("div").innerHTML);
 let div=document.querySelector("div");
 div.innerHTML="<div>innerdiv</div>"
 div.innerText="abcd";

 //getAttribute property

 let h1= document.querySelector("h1");
 let val=h1.getAttribute("id");
 console.log(val);//it will give the id of h1 tag.

 let p=document.querySelector("p");
 let clas=p.getAttribute("class");
 console.log(clas);

 //setAttribute property

 //console.log(clas.setAttribute("class","newclass"));-->not working

 h1.style.backgroundColor="green";