let userscore=0;
let compscore=0;
 let choices=document.querySelectorAll(".choice");
let msg=document .querySelector("#msg");
let score=document.querySelectorAll(".score");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let userchoose=document.querySelector("#usrchoose");
let cmp=document.querySelector("#computerchoice");
let button=document.querySelector(".button")

button.addEventListener("click",()=>{
    alert("Thanks for contect our team review your contect..");
})

let comchoice=()=>{
    let option=["paper","rock","scissor"];
    let random=Math.floor(Math.random()*3);
    return option[random];
   

};

const drow=()=>{
    console.log("match was drow");
    msg.innerText="match was drow try again";
    msg.style.backgroundColor = "black";

};



const showwinner=(userwin)=>{
if(userwin){
    console.log("you win");
    msg.innerText="you win";
    userscore++;
    user_score.innerText=userscore;
    msg.style.backgroundColor = "green";
    

}else{
    console.log("you loose");
    msg.innerText="you loose";
    compscore++;
    comp_score.innerText=compscore;
    msg.style.backgroundColor = "red";
}
};



const playgame=(userchoice,compchoice)=>{
if(userchoice===compchoice){
    drow();
}else{

let userwin=true;
if(userchoice==="rock"){
    userwin=compchoice==="paper"?false:true;
}else if(userchoice==="paper"){
    userwin=compchoice==="scissor"?false:true;
}
else{
    userwin=compchoice==="rock"?false:true;
}
showwinner(userwin);
}
}



 choices .forEach((choice)=>{
    choice.addEventListener("click",()=>{
       
       let userchoice= choice.getAttribute("id");
       console.log("you choose",userchoice);
       
        userchoose.innerText=userchoice;
       

        let compchoice=comchoice();
       
        console.log("computer choose=",compchoice);
       
        playgame(userchoice,compchoice);
        cmp.innerText=compchoice;
    })
 });
 

