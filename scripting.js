//insert elements
/*first of all we have to create element that is which element
we have ton insert by writing the given line
let el= document.createElement("button")//here we have provided button bcz we
want to insert button tag

and then we have to pick that in which node we have to insert element
//suppose we want to insert element in div which is written in html code
then we also have to pick that whether we want to append that created node
at end or at start by writing the following lines

node.append(el)//adds at end of node inside
node.prepend(el)//adds at starting of the node inside
node.before(el)//add before the node outside
node.after(el)//adds after the node outside */

let newbtn=document.createElement("button");
newbtn.innerText="clickme"

let div=document.querySelector("div");
div.append(newbtn);

//in order to remove node
//we will use node.remove;

let para=document.querySelector("p");
para.remove();

//study appendChild and removeChild method