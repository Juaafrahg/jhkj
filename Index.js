const sibtn = document.querySelector("#sibtn");

sibtn.addEventListener("click",function () {
    alert("Sábia que no te olvidas de tu nombre xde uwu")
});
const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
}) 