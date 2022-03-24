let container=document.querySelector(".container");
var color="red";
for (let i=1; i<=16; i++){
    
    var divCol=document.createElement("div");
    divCol.classList.add("r");
    divCol.classList.add("r"+String(i));
   // divCol.textContent=("x"+String(i));
    container.appendChild(divCol);

    for (let o=1; o<17; o++){
        var select =document.querySelector(`.r${i}`);
        
        var divCol=document.createElement("div");
        divCol.classList.add("box");
        var draw=true;
        //divCol.textContent=("h"+String(o));
        divCol.addEventListener("mousemove", function(e){if (draw){e.target.style.backgroundColor = color;
        e.target.style.borderColor = color;}})

        select.appendChild(divCol);
        
    }
   
   }
 document.querySelector(".clear").addEventListener("click", function(){
 var selector= document.getElementsByClassName("box");
 for (var i=0; i<selector.length; i++){
 selector[i].style.backgroundColor="blue";
 selector[i].style.borderColor="black";
 
 }
 })
 selector=document.querySelector("html");
 selector.addEventListener("click", function(){draw=!draw;
 if (draw){document.querySelector(".isDrawing").textContent="Drawing: ON  click to toggle";}else{document.querySelector(".isDrawing  click to toggle").textContent="Drawing: OFF"}})
   
for (var i=0; i<document.querySelectorAll(".color").length; i++){
selector=document.querySelectorAll(".color")[i];
selector.style.backgroundColor=document.querySelectorAll(".color")[i].id;
selector.addEventListener("click", function(e){color=e.target.style.backgroundColor;})
}
