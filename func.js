function opennav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    sidebar.style.width = "200px";
    main.style.marginLeft = "200px";
}

function closenav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    sidebar.style.width = "0px";
    main.style.marginLeft = "0px";
}
var cv=0;
function updatecart(){
   
    cv+=1;
    var cartvalue=document.querySelector(".cartvalue");
    cartvalue.innerHTML = cv;
}
function delcart(){
    if(cv>0){
        cv-=1;
    var cartvalue=document.querySelector(".cartvalue");
    cartvalue.innerHTML = cv;
    }
   }