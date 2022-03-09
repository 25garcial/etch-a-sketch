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
   
var select=document.querySelectorAll(".o");
select.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);