var h=document.querySelector("h1");
h.innerHTML="Hello";


var main=document.getElementById("main");
var s="";
for(var i=0;i<10;i++){
    s+=`<h1>Hello, It's Me</h1>`;
}
main.innerHTML=s;