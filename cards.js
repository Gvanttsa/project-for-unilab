let cards = [
    {
        id: 1,
        imgLink: 'images/plane.png',
        title: 'flight booking',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        id: 2,
        imgLink: 'images/hotel.png',
        title: 'hotel & resort booking',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        id: 3,
        imgLink: 'images/family.png',
        title: 'family trip planner',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        id: 4,
        imgLink: 'images/ship.png',
        title: 'cruise tour',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        id: 5,
        imgLink: 'images/camp.png',
        title: 'fire camp',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    },
    {
        id: 6,
        imgLink: 'images/office.png',
        title: 'corporate holidays',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.'
    }
];
let cardsWrapper = document.getElementById('card-box');

let overlayWrapper = document.getElementById('overlay');
let closeOverlay = document.getElementById('close');
let overlayContent = document.getElementById('overlay-content');

function createCard(item) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div-wrapper');
    cardDiv.setAttribute('data-id', item.id); //ovarlay

    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.imgLink);
    imgTag.setAttribute('alt', item.title);

    let cardTitle = document.createElement('h2');
    cardTitle.innerText = item.title;
    cardTitle.classList.add('card-title');

    let cardText = document.createElement('p');
    cardText.innerText = item.text;
    cardText.classList.add('text-box-text');

    cardDiv.appendChild(imgTag);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardText);

    cardsWrapper.appendChild(cardDiv);

    cardDiv.addEventListener('click', function(event) {
        let id = event.target.getAttribute('data-id'); //overlay
        openOvarlay(id);
        console.log(id);
    })
}

cards.forEach(elemet => {
    createCard(elemet);
});

function openOvarlay(id) {
    overlayWrapper.classList.add('active-overlay'); //overlay

   
    overlyFunction(id);
}

function overlyFunction() {
    let img = document.createElement('img');
    
    img.setAttribute('alt', cards.title);
    let p = document.createElement('p');
    p.innerText = cards.title;
    overlayContent.appendChild(p);
}
    closeOverlay.addEventListener('click', function() {
    overlayWrapper.classList.remove('active-overlay');
    
    overlayContent.innerHTML = ' ';
});
