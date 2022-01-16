document.getElementById("two").addEventListener("click", function (e) {
  let variable = e.target;
  console.log(variable);
});
document.querySelector(".container").addEventListener('mousemove',func);

function func(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`
}
