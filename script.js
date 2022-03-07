let container=document.querySelector(".container");

for (let i=0; i<=16; i++){
    
    var divCol=document.createElement("div");
    divCol.classList.add("r"+String(i));
    divCol.textContent=("h");
    container.appendChild(divCol);
   
   }
