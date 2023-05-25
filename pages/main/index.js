const overlay = document.querySelector('.opacity');
const body = document.body;
const slider = document.querySelector('.slider__cards')
const PETS = [
  {
    "name": "Katrine",
    "img": "./../../src/img/pets/katrine.png",
    "modal": "./../../src/img/modal/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": [
      "panleukopenia"
    ],
    "diseases": [
      "none"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Jennifer",
    "img": "./../../src/img/pets/jennifer.png",
    "modal": "./../../src/img/modal/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": [
      "none"
    ],
    "diseases": [
      "none"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Woody",
    "img": "./../../src/img/pets/woody.png",
    "modal": "./../../src/img/modal/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": [
      "adenovirus",
      "distemper"
    ],
    "diseases": [
      "right back leg mobility reduced"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Sophia",
    "img": "./../../src/img/pets/sophia.png",
    "modal": "./../../src/img/modal/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": [
      "parvovirus"
    ],
    "diseases": [
      "none"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Timmy",
    "img": "./../../src/img/pets/timmy.png",
    "modal": "./../../src/img/modal/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": [
      "calicivirus",
      "viral rhinotracheitis"
    ],
    "diseases": [
      "kidney stones"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Charly",
    "img": "./../../src/img/pets/charly.png",
    "modal": "./../../src/img/modal/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "./../../src/img/pets/scarlett.png",
    "modal": "./../../src/img/modal/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": [
      "parainfluenza"
    ],
    "diseases": [
      "none"
    ],
    "parasites": [
      "none"
    ]
  },
  {
    "name": "Freddie",
    "img": "./../../src/img/pets/freddie.png",
    "modal": "./../../src/img/modal/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": [
      "rabies"
    ],
    "diseases": [
      "none"
    ],
    "parasites": [
      "none"
    ]
  },
]
function giveIdToPets() {
  for (let i = 0; i <= PETS.length; i++) {
    PETS.map(obj => {
      obj.id = i++;
    })
  }
}
giveIdToPets()

////////////////BURGER///////////////////////////

function createBurger() {
  const burgerIcon = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.header__navigation');

  burgerIcon.addEventListener('click', () => {
    overlay.classList.toggle('active');
    body.classList.toggle('_lock');
    burgerIcon.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  })
  burgerMenu.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', () => {
      burgerIcon.classList.remove('active');
      burgerMenu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('_lock');
    })
  })
  overlay.addEventListener('click', () => {
    burgerIcon.classList.remove('active');
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('_lock');
  })
}
createBurger()


////////////////SLIDER///////////////////////////

function createSlider() {
  let wrapperSlider = document.createElement("div");
  wrapperSlider.className = "our-friends__slider slider";
  wrapperSlider.innerHTML =
    `
      <div class="slider__btn small__btn slider__btn_prev">
        <span class="slider__arrow">&#10142;</span>
      </div>
      <!-- carousel-wrapper -->
      <div class="slider-wrapper">
      <!-- carousel -->
        <div class="slider__box" id="slider-box">
      <!-- items -->
          <div class="slider__block block" id="left-block">
          </div>
          <div class="slider__block block" id="active-block">
          </div>
          <div class="slider__block block" id="right-block">
          </div>
        </div>
      </div>
    <div class="slider__btn small__btn slider__btn_next">
      <span class="slider__arrow">&#10142;</span>
    </div>
  `
  document.querySelector('.our-friends__content').appendChild(wrapperSlider);
  let createBigBtn = document.createElement("a");
  createBigBtn.href = "./../our-pets/pets.html";
  createBigBtn.className = "our-friends__button button";
  createBigBtn.innerText = "Get to know the rest"
  document.querySelector('.our-friends__content').appendChild(createBigBtn)

  let shuffledPets = PETS.sort(() => Math.random() - 0.5);

  const btnRight = document.querySelector('.slider__btn_next');
  const btnLeft = document.querySelector('.slider__btn_prev');
  const sliderBox = document.querySelector('#slider-box');

  const leftBlock = document.getElementById('left-block');
  const rightBlock = document.getElementById('right-block');
  const centralBlock = document.getElementById('active-block');

  let centralItemsId = [];
  let notUsedSlice;

  const screenDesktopSize = window.matchMedia('(min-width: 1201px)');
  const screenTabletSize = window.matchMedia('(min-width: 768px) and (max-width: 1200px) ')
  const screenMobileSize = window.matchMedia('(min-width: 320px) and (max-width: 767px) ')

  let cardsPerBlock;


  function printLog1(screenBig) {
    if (screenBig) {
      cardsPerBlock = 3
      startItems = shuffledPets.slice(0, cardsPerBlock);
      prepareBlocks()
    }
    else {
      cardsPerBlock = 2;
    }
  }
  function printLog2(screenMedium) {
    if (screenMedium) {
      cardsPerBlock = 2
      startItems = shuffledPets.slice(0, cardsPerBlock);

      prepareBlocks()
    }
  }
  function printLog3(screenSmall) {
    if (screenSmall) {
      cardsPerBlock = 1
      startItems = shuffledPets.slice(0, cardsPerBlock);
      prepareBlocks()
    }
  }
  printLog1(screenDesktopSize.matches)
  printLog2(screenTabletSize.matches)
  printLog3(screenMobileSize.matches)

  screenDesktopSize.addEventListener('change', function (event) {
    printLog1(event.matches)
  })
  screenTabletSize.addEventListener('change', function (event) {
    printLog2(event.matches)
  })
  screenMobileSize.addEventListener('change', function (event) {
    printLog3(event.matches)
  })

  function prepareBlocks() {
    rightBlock.innerHTML = '';
    centralBlock.innerHTML = '';
    rightBlock.innerHTML = '';
    generateCards('active-block', startItems);
    generatePopUp()
    centralItemsId = [];
    getCentralItemsId()
    notUsedSlice = shuffledPets.filter(item => !centralItemsId.includes(item.id)).sort(() => Math.random() - 0.5).slice(0, cardsPerBlock);
  }

  function generateCards(block, petArr) {
    petArr.map(({ id, name, img }) => {
      let elem = document.createElement("div");
      elem.className = 'block__pet pet';
      elem.dataset.card = `pet-${id}`;
      elem.id = `${id}`;
      elem.innerHTML =
        `<div class="pet__image">
    <img src=${img} alt="pet-${name}">
  </div>
  <h4 class="pet__name">${name}</h4>
  <button class="pet__button button">Learn more</button>
  `
      document.getElementById(block).appendChild(elem)
    })
  }

  function getCentralItemsId() {
    for (let i = 0; i < (centralBlock.children).length; i++) {
      itemId = +centralBlock.children[i].id;
      centralItemsId.push(itemId)
    }
  }


  const moveLeft = () => {
    sliderBox.classList.add("transition-left");
    if (leftBlock.innerHTML == '\n          ' || leftBlock.innerHTML == '') {
      let notUsedSlice = shuffledPets.filter(item => !centralItemsId.includes(item.id)).sort(() => Math.random() - 0.5).slice(0, cardsPerBlock);
      generateCards('left-block', notUsedSlice);
    }
    centralItemsId = [];
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  }

  const moveRight = () => {
    sliderBox.classList.add("transition-right");
    if (rightBlock.innerHTML == '\n          ' || rightBlock.innerHTML == '') {
      let notUsedSlice = shuffledPets.filter(item => !centralItemsId.includes(item.id)).sort(() => Math.random() - 0.5).slice(0, cardsPerBlock);
      generateCards('right-block', notUsedSlice);
    }
    centralItemsId = [];
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
  sliderBox.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      sliderBox.classList.remove("transition-left");
      const centralBlockItems = centralBlock.innerHTML;
      rightBlock.innerHTML = centralBlockItems;
      const leftBlockItems = leftBlock.innerHTML;
      centralBlock.innerHTML = leftBlockItems;
      leftBlock.innerHTML = '';
      getCentralItemsId();
    }
    else {
      sliderBox.classList.remove("transition-right");
      const centralBlockItems = centralBlock.innerHTML;
      leftBlock.innerHTML = centralBlockItems;
      const rightBlockItems = rightBlock.innerHTML;
      centralBlock.innerHTML = rightBlockItems;
      rightBlock.innerHTML = '';
      getCentralItemsId();
    }
    generatePopUp()

    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
  })

}
createSlider()

////////////////POP-UP///////////////////////////

function generatePopUp() {
  const popUpParent = document.querySelector('.popup-wrapper');   //our-friends__content
  PETS.map(({ name, modal, type, breed, description, age, diseases, inoculations, parasites, id }) => {
    let popUp = document.createElement("div");
    popUp.className = 'popup-item'; //our-friends__popup
    popUp.dataset.target = `pet-${id}`;
    popUp.innerHTML =
      ` <div class="small__btn popup__btn">&#10006;</div>
   <div class="popup__content">
     <div class="popup__image">
     <img src=${modal} alt="pet-${name}">
     </div>
     <div class="popup__info info">
       <div class="info__name">${name}</div>
       <div class="info__about">
         <div class="info__type">${type}</div>
         <span class="info__span">-</span>
         <div class="info__breed">${breed}</div>
       </div>
       <div class="info__description">${description}</div>
       <ul class="info__list">
         <li class="info__item age"><span class="info-span">age: </span>${age}</li>
         <li class="info__item inoculations"><span class="info-span">inoculations: </span>${inoculations}</li>
         <li class="info__item diseases"><span class="info-span">diseases: </span>${diseases}</li>
         <li class="info__item parasites"><span class="info-span">parasites: </span>${parasites}</li>
       </ul>
     </div>
`
    popUpParent.appendChild(popUp)
  })
  openPopUp()
}


const popUp = document.querySelectorAll('.popup-item'); //our-friends__popup
const closePopUp = document.querySelectorAll('.popup__btn');

function openPopUp() {
  const card = document.querySelectorAll('.block__pet')//cards__pet
  card.forEach(link => {
    link.addEventListener('click', () => {
      let name = link.getAttribute('data-card');
      popUp.forEach(item => {
        let target = item.getAttribute('data-target');
        if (name == target) {
          item.classList.toggle('active');
          overlay.classList.toggle('active');
          body.classList.toggle('_lock');
        }
        overlay.addEventListener('click', () => {
          item.classList.remove('active')
          overlay.classList.remove('active');
          body.classList.remove('_lock');
        })
        closePopUp.forEach(btn => {
          btn.addEventListener('click', () => {
            item.classList.remove('active')
            overlay.classList.remove('active');
            body.classList.remove('_lock');
          })
        })
      })
    });
  })

}