let container = null;
let check = null;

function createContainer (){
  el = document.createElement('div');
  el.setAttribute('class', 'carousel');
  el.setAttribute('id', 'carousel');
  document.querySelector('body').appendChild(el);

  container = document.querySelector('#carousel');
};

function createSlides (n){
  slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');
  
  for(i=0; i < n; i++){    
    let slidesItem = document.createElement('li');
    slidesItem.setAttribute('class', i === 0? 'slides__item active':'slides__item');
    
    let slidesLink = document.createElement('a');
    slidesLink.setAttribute('href', '#')

    slidesItem.appendChild(slidesLink);
    slides.appendChild(slidesItem);
  }
  container.appendChild(slides);
};

function createIndicators (n){
  indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');

  for(i=0; i < n; i++){    
    let indicatorsItem = document.createElement('span');
    indicatorsItem.setAttribute('class', i === 0? 'indicators__item active':'indicators__item');
    indicatorsItem.dataset.slideTo = `${i}`;
    indicators.appendChild(indicatorsItem);
  }
  container.appendChild(indicators);
};

function createControls (){
  controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  const FA_PREV = `<i class="fas fa-chevron-left"></i>`;
  const FA_NEXT = `<i class="fas fa-chevron-right"></i>`;
  const FA_PAUSE = `<i class="fas fa-play"></i>`;

  const prev = document.createElement('div');
  prev.setAttribute('class', 'controls__item controls__prev');
  prev.innerHTML = FA_PREV;
  
  const next = document.createElement('div');
  next.setAttribute('class', 'controls__item controls__next');
  next.innerHTML = FA_NEXT;
  
  const pause = document.createElement('div');
  pause.setAttribute('class', 'controls__item controls__pause');
  pause.innerHTML = FA_PAUSE;
    
  controls.appendChild(prev);
  controls.appendChild(next);
  controls.appendChild(pause);
  container.appendChild(controls);
};

function createStyle () {
  style = document.createElement('style');
  let styleCode = `
  .slides,
  .controls { position: relative; }
  .indicators { display: flex; }
  .indicators__item { 
    background-color : purple;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    margin: 10px;
  }
  .controls__item { color:  purple;}`

  style.innerHTML = styleCode;
  container.appendChild(style)
};

function handler (evt){
  let target = evt.target;

  if(target.classList.contains('indicators__item')){
    target.style.backgroundColor = 'red';

    if (check !== null) check.removeAttribute('style');
    check = target;
  }
};

function listener(){
  let indicators = document.querySelector('.indicators')

  indicators.addEventListener('click', handler);
};

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  // createContainer();
  createSlides (slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  listener();
};

createCarousel();