let container=document.querySelector(.container);

for (let i=0; i<=16; i++){
    alert(1);
    var divCol=document.createElement("div");
    divCol.classList.add("r"+String(i));
    container.appendChild(divCol);
    alert(2);
   }
