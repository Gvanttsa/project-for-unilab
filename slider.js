let data = [
    {
        id: 1,
        imgUrl: 'images/slide.png',
        price: 'From $199/Person',
        title: 'Discover Greece',
        text: 'travel with uniquie experiance'
    },
    {
        id: 2,
        imgUrl: 'images/travel-world.jpg',
        price: 'From $100/Person',
        title: 'Discover Greece',
        text: 'Adventure is out there'
    },
    {
        id: 3,
        imgUrl: 'images/backpacker.jpg',
        price: 'From $250/Person',
        title: 'Discover Greece',
        text: 'there is a world elsewhere'
    } 
];


let arrowLeft = document.getElementById('arrow-left');
let arroeRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');

let sliderIndex = 0;

function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imgUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('slider-img');

    return tagImage;
};

function createDivTag(item) {
    let divTag = document.createElement('div');
    divTag.classList.add('slider-texts');

    return divTag;
};

function createPrice(item) {
    let priceText = document.createElement('p');
    priceText.append(item.price);
    priceText.classList.add('price');

    return priceText;
};

function createH2Tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.append(item.title);
    tagTitle.classList.add('slider-title');

    return tagTitle;
};

function createPTag(item) {
    let pTag = document.createElement('p');
    pTag.append(item.text);
    pTag.classList.add('slider-p')

    return pTag;
}


function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideImg = createImgTag(data[sliderIndex]);
    let slideDiv = createDivTag(data[sliderIndex]);
    let slidePrice = createPrice(data[sliderIndex]);
    let slideTitle = createH2Tag(data[sliderIndex]);
    let slideText = createPTag(data[sliderIndex]);

    slideDiv.appendChild(slidePrice);
    slideDiv.appendChild(slideTitle);
    slideDiv.appendChild(slideText);

    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(slideImg);

    console.log(sliderContent);
}

arrowLeft.addEventListener('click', function() {
    if (sliderIndex <= 0) {
        return;
    }
    sliderIndex--;
    setSlide();
});

arroeRight.addEventListener('click', function() {
    if (sliderIndex >= data.length - 1) {
        return;
    }
    sliderIndex++;
    setSlide();
});

setSlide();