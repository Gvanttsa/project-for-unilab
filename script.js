// burger bar 
let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleButton');
let firstLine = document.getElementById('burger1');
let secondLine = document.getElementById('burger2');
let thirdLine = document.getElementById('burger3');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('avtivenav');
    firstLine.classList.toggle('activeLine1');
    secondLine.classList.toggle('activeLine2');
    thirdLine.classList.toggle('activeLine3');
});





