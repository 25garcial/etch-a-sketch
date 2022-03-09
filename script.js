let container=document.querySelector(".container");

for (let i=1; i<=16; i++){
    
    var divCol=document.createElement("div");
    divCol.classList.add("r");
    divCol.classList.add("r"+String(i));
    divCol.textContent=("x"+String(i));
    container.appendChild(divCol);

    for (let o=0; o<16; o++){
        var select =document.querySelector(`.r${i}`);
        
        var divCol=document.createElement("div");
      
        divCol.classList.add("r");
        
        divCol.textContent=("h"+String(o));
        
        select.appendChild(divCol);
        
    }
   
   }
