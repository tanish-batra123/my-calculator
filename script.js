string="";
let input=document.querySelector(".input");
let button= document.querySelectorAll('button');
let arr=Array.from(button);
arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML =="="){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == "AC"){
            string="";
            input.value=string;

        }
        else if(e.target.innerHTML=="✖"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML=="%"){
            string=string/100;
            input.value=string;

        }
        else{
            string+= e.target.innerHTML;
            input.value=string;
        }

    })
})

