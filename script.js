let button = document.querySelector("#buttons")
let loveboyname = document.getElementById("love");
let lovecrushname = document.getElementById("love1");


function calculate(){
    let num1 = loveboyname.value ;
    let num2 = lovecrushname.value ;

    // let num = Math.floor((Math.random()*100));
    // console.log(num);

    let num = num1.length * num2.length ;
    const el = document.createElement("h1");
    el.style.color = "red";
    el.style.backgroundColor = "white";
    el.textContent = (num*num*num)%101 ;
    button.after(el);
    
}


button.addEventListener('click' , calculate);