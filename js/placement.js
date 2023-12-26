const wrapper = document.querySelector(".placement-wrapper");
const carousel = document.querySelector(".placement-carousel");
const firstCardWidth = carousel.querySelector(".placement-card").offsetWidth;
const arrowBtns = document.querySelectorAll(".placement-wrapper i");


console.log("wraperr =",wrapper,carousel,firstCardWidth,carousel.scrollLeft)

const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;


const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  // console.log('draging func = ',e.pageX,startX)
  if(!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX); 
}

const dragStop = () => {
  console.log('draging stop = ',carousel.scrollLeft)
  isDragging = false;
  carousel.classList.remove("dragging");
}

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("left above arrow",carousel.scrollLeft,firstCardWidth,btn.id)

        carousel.scrollLeft += btn.id == "placement-left-arrow" ? -firstCardWidth : firstCardWidth;


        clearTimeout(timeoutId);
        console.log('for each func =',btn.id,carousel.scrollLeft)
        autoPlay()
    });
});


let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);


carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  // console.log("card array =",card,cardPerView)
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});


carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");


const infiniteScroll = () => {
    console.log('infinite scroll')
  // console.log("scrol left =",carousel.scrollLeft)
  // If the carousel is at the beginning, scroll to the end
  if(carousel.scrollLeft === 0) {
      console.log('if condition')
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth)
   {
      console.log('end carousel',carousel.scrollLeft,carousel.scrollWidth)
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
  }  

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  // if(!wrapper.matches(":hover")) autoPlay();
  autoPlay();

}

const autoPlay = () => {
  if(!isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
 console.log('auto play function',firstCardWidth,carousel.scrollLeft)
  timeoutId = setTimeout(() => {carousel.scrollLeft += firstCardWidth;console.log('set timeout func')}, 2500);
  console.log('timeout id =',carousel.scrollLeft)
}

autoPlay()


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseleave", autoPlay);