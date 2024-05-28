//create a new button element. Give a text click me background color of red
// and text color of white and insert the button as the first element on body tag
 let el=document.createElement("button");
 el.innerText="Click Me"
 el.style.backgroundColor="red";
 el.style.color="white";

 let bdy= document.querySelector("body");
 bdy.prepend(el);

 //create a paragraph tag in html and give it some tag and styling
 //Now create a new class in css and try to append this class to the <p>element
 //did you notice how you overwrite the class name when you add a new one
 //solve this problem using class list.
 let param=document.querySelector("p");
 //param.setAttribute("class","bkgred");-->not working
 