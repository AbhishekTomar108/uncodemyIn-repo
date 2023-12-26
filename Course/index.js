

// auto carousel code 


// const wrapper = document.querySelector(".placement-wrapper");
// const carousel = document.querySelector(".placement-carousel");
// const firstCardWidth = carousel.querySelector(".placement-card").offsetWidth;

// console.log("wraperr =",wrapper,carousel,firstCardWidth,carousel.scrollLeft)

// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;


// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//   // console.log('draging func = ',e.pageX,startX)
//   if(!isDragging) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX); 
// }

// const dragStop = () => {
//   console.log('draging stop = ',carousel.scrollLeft)
//   isDragging = false;
//   carousel.classList.remove("dragging");
// }

// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//   // console.log("card array =",card,cardPerView)
//   carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });


// carouselChildrens.slice(0, cardPerView).forEach(card => {
//   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });


// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");


// const infiniteScroll = () => {
//   // console.log("scrol left =",carousel.scrollLeft)
//   // If the carousel is at the beginning, scroll to the end
//   if(carousel.scrollLeft === 0) {
//       console.log('if condition')
//       carousel.classList.add("no-transition");
//       carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//       carousel.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth)
//    {
//       console.log('end carousel',carousel.scrollLeft,carousel.scrollWidth)
//       carousel.classList.add("no-transition");
//       carousel.scrollLeft = carousel.offsetWidth;
//       carousel.classList.remove("no-transition");
//   }  

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId);
//   // if(!wrapper.matches(":hover")) autoPlay();
//   autoPlay();

// }

// const autoPlay = () => {
//   if(!isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   console.log('auto play function',firstCardWidth,carousel.scrollLeft)
//   timeoutId = setTimeout(() => {carousel.scrollLeft += firstCardWidth;console.log('set timeout func')}, 2500);
// }

// autoPlay()


// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseleave", autoPlay);


// end of auto carousel code

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 50;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);




//   galary image 

// Get the content element


// // Get a reference to the container element
// const container = document.getElementById('main-gallery');

// // const container = document.querySelectorAll('main-gallery');

// const sayHello = () => {

//     const computedStyle = window.getComputedStyle(container)
//     const leftValue = computedStyle.getPropertyValue('margin-left')

//     console.log('marginLeft =', leftValue)
//     console.log('interval running')
//     container.style.marginLeft = "-100%"
// }

// setInterval(sayHello, 1000);


// const container = document.getElementById('main-gallery');
// const containerWidth = container.offsetWidth;
// let scrollAmount = 100;
// const step = 10; // Adjust this value to control the scroll speed
// let isMouseOverContainer = false;


// const scrollContainer = () => {
//   scrollAmount += step;
//   container.style.marginLeft = `-${scrollAmount}%`;

  

//   if (scrollAmount >= 100) {
//     // Scroll completed, reset scrollAmount to 0
//     scrollAmount = 0;
//   }
// };

// setInterval(scrollContainer, 1000);


const container = document.getElementById('main-gallery');
const containerWidth = container.offsetWidth;
let scrollAmount = 0;
const step = 10; // Adjust this value to control the scroll speed
let isMouseOverContainer = false;

const scrollContainer = () => {
  if (isMouseOverContainer) {
    return; // Stop scrolling if mouse is over the container
  }

  scrollAmount += step;
  container.style.marginLeft = `-${scrollAmount}%`;

  if (scrollAmount >= 100) {
    // Scroll completed, reset scrollAmount to 0
    scrollAmount = 0;
  }
};

container.addEventListener('mouseenter', () => {
  isMouseOverContainer = true;
});

container.addEventListener('mouseleave', () => {
  isMouseOverContainer = false;
});

setInterval(scrollContainer, 1000);




// Placement Session js

// function rightclick(){
//   const scroll = document.querySelectorAll('.scroll')
//   console.log(scroll)
//   const compStyles = window.getComputedStyle(scroll[0]);
//   console.log(compStyles)
//   const movingWidth = parseFloat(compStyles.getPropertyValue('width'))
//   console.log(movingWidth)
//   const totalScrollWidth = (scroll.length-1)*movingWidth;
//   console.log(totalScrollWidth)
  
//   const cardSlidder = document.querySelector('.card-slider')
//   console.log(cardSlidder)
//   const slidderCompStyle = window.getComputedStyle(cardSlidder);
//   const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
//   console.log(sliderLeft)
//   const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


//  console.log(Math.abs(sliderLeft)+sliderWidth,totalScrollWidth)


//  if(Math.abs(sliderLeft)+sliderWidth<=totalScrollWidth){
  

//   const scrollValue = Math.abs(sliderLeft) + movingWidth;
//   cardSlidder.style.left = `-${scrollValue}px`
//  }

//  else{
//   console.log('else')
//   cardSlidder.style.left ='0'
//  }

//   // cardSlidder.style.left = `-${movingWidth}px`

// }


// function leftclick()
// {
//   console.log('left click func')
//   const scroll = document.querySelectorAll('.scroll')


//   const compStyles = window.getComputedStyle(scroll[0]);

//   const movingWidth = parseFloat(compStyles.getPropertyValue('width'))

//   const totalScrollWidth = (scroll.length-1)*movingWidth;

//   const cardSlidder = document.querySelector('.card-slider')
//   const slidderCompStyle = window.getComputedStyle(cardSlidder);
//   const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
//   console.log(sliderLeft)
//   const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


//  console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth)


//  if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){
  

//   const scrollValue = Math.abs(sliderLeft) - movingWidth;
//   cardSlidder.style.left = `-${scrollValue}px`
//  }

//  else{
//   console.log('else')
//   cardSlidder.style.left =`-${totalScrollWidth-sliderWidth}px`
//  }

//   // cardSlidder.style.left = `-${movingWidth}px`

// }


function leftClick(){
  const scroll = document.querySelectorAll('.scroll-review')


  const compStyles = window.getComputedStyle(scroll[0]);

  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))

  const totalScrollWidth = (scroll.length-1)*movingWidth;

  const cardSlidder = document.querySelector('.card-slider-review')
  const slidderCompStyle = window.getComputedStyle(cardSlidder);
  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))


 console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth)


 if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){
  

  const scrollValue = Math.abs(sliderLeft) - movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left =`-${totalScrollWidth-sliderWidth}px`
 }
}

function rightClick(){
  const scroll = document.querySelectorAll('.scroll-review')
  console.log(scroll)
  const compStyles = window.getComputedStyle(scroll[0]);
  console.log(compStyles)
  const movingWidth = parseFloat(compStyles.getPropertyValue('width'))
  console.log(movingWidth)
  const totalScrollWidth = (scroll.length-1)*movingWidth;
  console.log(totalScrollWidth)

  const cardSlidder = document.querySelector('.card-slider-review')
  console.log(cardSlidder)
  const slidderCompStyle = window.getComputedStyle(cardSlidder);

  const sliderLeft = parseFloat(slidderCompStyle.getPropertyValue('left'))
  console.log(sliderLeft)
  const sliderWidth = parseFloat(slidderCompStyle.getPropertyValue('width'))

  console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),totalScrollWidth)


 if(Math.abs(Math.abs(sliderLeft)+sliderWidth)<=totalScrollWidth){

  const scrollValue = Math.abs(sliderLeft) + movingWidth;
  cardSlidder.style.left = `-${scrollValue}px`
 }

 else{
  console.log('else')
  cardSlidder.style.left ='0'
 }
}




// Placement Session js