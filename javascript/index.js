
const getcolor = () =>{
    const randomcolor =  Math.floor(Math.random()*16777215);
    const randomcode = "#"+randomcolor.toString(16)
// let hex = randomcode

    console.log(randomcolor,randomcode)
    // console.log(hex)
    document.body.style.backgroundColor = randomcode;
    document.getElementById("text").innerText= randomcode;
}
// event call
document.getElementById("btn").addEventListener(
    'click',
    getcolor
    );
  
    
    //initail call
    getcolor()