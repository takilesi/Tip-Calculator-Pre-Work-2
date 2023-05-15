const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
    const cost = document.querySelector("input");
    console.log(cost.value *0.15);
    let tip = (cost.value *0.15).toFixed(2);
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = temp;
})


const button_el = document.querySelector("#twenty")
console.log(button_el); 
button_el.addEventListener("click", function(){
  const cost = document.querySelector("input");
    console.log(cost.value *0.20);
    let tip = (cost.value *0.20).toFixed(2);
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = temp;
} )