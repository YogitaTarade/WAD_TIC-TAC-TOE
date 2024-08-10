let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let reGamebtn=document.querySelector("#reset");

let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

// track the turn of x and o 
let turnO=true;
let arr=[
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6],

         ];

         const disableboxes =() =>{
            for(let box of boxes){
                box.disabled=true;
            }
         }
         const enableboxes =() =>{
            for(let box of boxes){
                box.enabled=false;
                box.innerText="";
            }
         }
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("bos was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const showwinner =(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner =()=>{
    
    for( let pattern of arr){
        
        let posval1 =   boxes[pattern[0]].innerText;
        let posval2 =   boxes[pattern[1]].innerText;
        let posval3 =   boxes[pattern[2]].innerText;

     if(posval1!="" && posval2!="" && posval3!=""){
        if(posval1==posval2 && posval1===posval3){
            console.log("winner",posval1);
          
            showwinner(posval1);
        }
     }

    };
    

}
const resetGame =()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
newGamebtn.addEventListener("click",resetGame);
reGamebtn.addEventListener("click",resetGame);