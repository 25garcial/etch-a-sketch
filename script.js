let container=document.querySelector(".container");

for (let i=1; i<=16; i++){
    
    var divCol=document.createElement("div");
    divCol.classList.add(String(i));
    divCol.textContent=("x"+String(i));
    container.appendChild(divCol);

    for (let o=1; o<=16; o++){
        
        var selector =document.getElementByClassName(i);
  
        var divCol=document.createElement("div");
      
        divCol.classList.add("r"+String(o));
        
        divCol.textContent=("h"+String(o));
        
        selector.appendChild(divCol);
        alert(1)
    }
   
   }
