const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si ')
});

yesBtn.addEventListener('click',function () {
    alert('Quiero saber cuantas veces le diste al no ')
});

yesBtn.addEventListener('click',function () {
    alert('Ahora enserio si no quieres no hay problema pero piensalo mira soy bueno haciendo esto :)')
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})