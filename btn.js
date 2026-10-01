let div = document.getElementById("div");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(event) {
    
    event.preventDefault(); 

    
    if (div.style.overflow === "hidden" || div.style.overflow === "") {
        div.style.height = "auto";       
        div.style.overflow = "visible";   
        toggleBtn.innerText = "ReadLess"; 
    } 
   
    else {
        div.style.height = "100px";    
        div.style.overflow = "hidden";   
        toggleBtn.innerText = "ReadMore"; 
    }
});
