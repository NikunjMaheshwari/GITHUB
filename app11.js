//DOM=document object model
//the DOM represents a document with a logical tree.
//it allows us to manipulate/change webpage content(HTML elements).
//console.dir(document.all[6].innertext); =>spiderman 
//to change name-document.all[6].innertext="peter parker";spiderman will

//selecting elements.
//getElementById
//returns the element as an object or null(if not found)


//Manipulating Styles.lec-09
let links=document.querySelectorAll(".box");
for(let i=0;i<links.length;i++){
    links[i].style.color="green";
}
