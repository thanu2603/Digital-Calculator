let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(click)=>{
        if(click.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(click.target.innerHTML=='del'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(click.target.innerHTML=='C'){
            string="";
            input.value=string;
        }
        else{
            string+=click.target.innerHTML;
            input.value=string;
        }
    })
})