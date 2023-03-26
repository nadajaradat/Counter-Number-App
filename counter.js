let count = 0;
let d = document.getElementById("display");
const  increase =()=>{
    count++;
    d.textContent = count; 
}
const  reset =()=>{
    count = 0;
    d.textContent = count;
}

const  decrease =()=>{
    count--;
    d.textContent = count;
    
}