let container=document.querySelector(".container");

for (let i=1; i<=16; i++){
    
    var divCol=document.createElement("div");
    divCol.classList.add("r");
    divCol.classList.add("r"+String(i));
   // divCol.textContent=("x"+String(i));
    container.appendChild(divCol);

    for (let o=1; o<17; o++){
        var select =document.querySelector(`.r${i}`);
        
        var divCol=document.createElement("div");
        divCol.classList.add("o");
        
        divCol.textContent=("h"+String(o));
        
        select.appendChild(divCol);
        
    }
   
   }
   
var select=document.querySelector(".o");
 
  
        select.addEventListener("mouseover", function () {select.style.backgroundColor = "red";})
