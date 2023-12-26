const wrapper = document.querySelector(".wrapper-above");
const wrapperBelow = document.querySelector(".wrapper-below");
const carousel = document.querySelector(".carousel-above");
const carouselBelow = document.querySelector(".carousel-below");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const belowFirstCardWidth = carouselBelow.querySelector(".card").offsetWidth;
console.log("off set card =",firstCardWidth,belowFirstCardWidth,carousel.offsetWidth,carousel.querySelectorAll(".card").length,carouselBelow.querySelectorAll(".card").length)
const arrowBtns = document.querySelectorAll(".team-main-container i");
const carouselChildrens = [...carousel.children];
const belowCarouselChildrens = [...carouselBelow.children];

let isDragging = false, isAutoPlay = true, isautoPlayBelow=true, startX, startScrollLeft, startScrollBelowLeft, timeoutId, timeoutId2;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    // console.log("card array =",card,cardPerView)
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

belowCarouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    // console.log("card array =",card,cardPerView)
    carouselBelow.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

belowCarouselChildrens.slice(0, cardPerView).forEach(card => {
    carouselBelow.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

carouselBelow.classList.add("no-transition");
carouselBelow.scrollLeft = carousel.offsetWidth;
carouselBelow.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("left above arrow",carousel.scrollLeft,firstCardWidth)

        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        carouselBelow.scrollLeft += btn.id == "left" ? -belowFirstCardWidth : belowFirstCardWidth;

        clearTimeout(timeoutId);
        console.log('for each func =',btn.id,carousel.scrollLeft)
        autoPlay()
    });
});


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    carouselBelow.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
    startScrollBelowLeft = carouselBelow.scrollLeft;
}

const dragging = (e) => {
    // console.log('draging func = ',e.pageX,startX)
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    carouselBelow.scrollLeft = startScrollBelowLeft - (e.pageX - startX);
}

const dragStop = () => {
    console.log('draging stop = ',carousel.scrollLeft)
    isDragging = false;
    carousel.classList.remove("dragging");
    carouselBelow.classList.remove("dragging");
}

const infiniteScroll = () => {
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
const infiniteBelowScroll = () => {
    // console.log("scrol left =",carousel.scrollLeft)
    // If the carousel is at the beginning, scroll to the end
    
    if(carouselBelow.scrollLeft === 0) {
        console.log('if condition')
        carouselBelow.classList.add("no-transition");
        carouselBelow.scrollLeft = carouselBelow.scrollWidth - (2 * carouselBelow.offsetWidth);
        carouselBelow.classList.remove("no-transition");
    }

    else if(Math.ceil(carouselBelow.scrollLeft) === carouselBelow.scrollWidth - carouselBelow.offsetWidth)
     {
        console.log('end carousel infinite below',carouselBelow.scrollLeft,carouselBelow.scrollWidth)
        carouselBelow.classList.add("no-transition");
        carouselBelow.scrollLeft = carouselBelow.offsetWidth;
        carouselBelow.classList.remove("no-transition");
    }

}

const autoPlay = () => 
{ 
    if(!isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    console.log('auto play function',firstCardWidth,carousel.scrollLeft)
    console.log('firstCardWidth auto play =',firstCardWidth,carousel.scrollLeft,carouselBelow.scrollLeft)
    timeoutId = setTimeout(() => {carousel.scrollLeft += firstCardWidth;carouselBelow.scrollLeft += belowFirstCardWidth}, 2500);
}

    autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carouselBelow.addEventListener("mousedown", dragStart);
carouselBelow.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
carouselBelow.addEventListener("scroll", infiniteBelowScroll);
wrapper.addEventListener("mouseleave", autoPlay);

  

