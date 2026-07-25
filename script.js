let p = document.querySelector("p");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let text=p.innerText;

let iteration = 0;

p.addEventListener("mouseenter",function(){

    function randomText(){

    // To reveal the Original Text
    let string=text.split("").map((char,index)=>{
        if(index < iteration){
            return char;
        }

        //To apply the effect of Random text generation the screen
        return alphabet.split("")[Math.floor(Math.random()*53)];
    }).join("");
    
    p.innerHTML=string;

    iteration+=0.25;
};

setInterval(randomText,30);

});


