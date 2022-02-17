var a=["head","tell"];
let c=a[Math.floor(Math.random()*a.length)];
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
let computer=0,player=0;
btn1.addEventListener("click",()=>{
    const b=btn1.innerHTML.toLowerCase();
    document.getElementById("player").innerHTML=b;
    if(b==c){
        player++;
        console.log(c);
      document.getElementById("coinplayer").innerHTML=player;
      document.getElementById("coincomputer").innerHTML=computer;
      checkwin(player);
    }
    else
     {
         computer++;
         document.getElementById("coincomputer").innerHTML=computer;
         document.getElementById("coinplayer").innerHTML=player;
         checkwincomputer(computer);
     }
    document.getElementById("computer").innerHTML=c;
    c=a[Math.floor(Math.random()*a.length)];
});
btn2.addEventListener("click",()=>{
    const b=btn2.innerHTML.toLowerCase();
    document.getElementById("computer").innerHTML=c;
    document.getElementById("player").innerHTML=b;
    if(b==c){
        player++;
        document.getElementById("coinplayer").innerHTML=player;
        document.getElementById("coincomputer").innerHTML=computer;
        checkwin(player);
    }
   else
   {
    document.getElementById("coinplayer").innerHTML=player;
    computer++;
        document.getElementById("coincomputer").innerHTML=computer;
        checkwincomputer(computer);
   }
    c=a[Math.floor(Math.random()*a.length)];
});
 function checkwincomputer(a)
 {
   if(a==5)
     {
       alert("💻computer won💻");
       location.reload();
     }
 }
 function checkwin(a)
 {
   if(a==5)
     {
       alert("🎈you  won🎈");
       location.reload();
     }
 }