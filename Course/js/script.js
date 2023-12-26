// add schema
// Define the JSON-LD schema template
var schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "", 
  "image": "https://uncodemy.com/wp-content/uploads/2021/07/Uncodemy-logo-07.png",
  "description": "", 
  "brand": {
    "@type": "Brand",
    "name": "Uncodemy"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "33,699",
    "reviewCount": "33,699"
  }
};

// Function to update the schema name and description fields
function updateSchemaFields() {
  // Get the current page title
  var pageTitle = document.getElementsByTagName('title')[0].innerText;

  // Extract the city name and course name from the page title using keywords
  var { cityName, courseName } = extractCityAndCourseFromTitle(pageTitle);

  // Update the name field with the page title
  schema.name = `${courseName} in ${cityName}`;

  // Update the description field with the dynamically extracted city and course names
  schema.description = `Uncodemy IT training institute offers the ${courseName} Course in ${cityName}, with a 100% Placement Record and practical training for Students and professionals. The course covers the complete curriculum from scratch to advance, providing job-oriented career opportunities. Enroll now and earn your Global Certificate in ${courseName} from Uncodemy.`;

  // Create a new script element
  var scriptTag = document.createElement('script');

  // Insert the JSON-LD schema into the script element
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schema, null, 2);

  // Find an existing <meta> tag in the HTML <head>
  var headTag = document.head || document.getElementsByTagName('head')[0];
  var metaTag = headTag.querySelector('meta[name="saswp-custom-schema-markup-output"]');

  // Append the script element to the HTML <head> after the <meta> tag
  if (metaTag) {
    headTag.insertBefore(scriptTag, metaTag.nextSibling);
  } else {
    headTag.appendChild(scriptTag);
  }
}

// Function to extract the city name and course name from the title using keywords
function extractCityAndCourseFromTitle(title) {
  var keywords = [" in ", " at ", " - "]; // Keywords that may indicate the city name

  for (var keyword of keywords) {
    var index = title.lastIndexOf(keyword);
    if (index !== -1) {
      var courseName = title.substring(0, index).trim();
      var cityName = title.substring(index + keyword.length).trim();
      return { cityName, courseName };
    }
  }

  return { cityName: 'Unknown', courseName: 'Unknown' };
}

// Call the function to update the schema name and description fields
updateSchemaFields();

// add schema









// ------------------ header course javascript --------------








// --------------- change course javascript --------------

var courseNames = document.getElementsByClassName("course-name");

// Add event listener to each li element
for (var i = 0; i < courseNames.length; i++) {
  addEventListenerToCourse(i);
}

function addEventListenerToCourse(index) {
  courseNames[index].addEventListener("click", function () {
    var activeElement = document.getElementById("active");
    var checkElement = document.getElementById("check");
    if (activeElement) {
      activeElement.removeAttribute("id");
      checkElement.removeAttribute("id");
    }

    var addactiveElement = document.getElementsByClassName('course-card-thumb')[index];
    var courseElement = document.getElementsByClassName('course-name')[index];
   
    addactiveElement.setAttribute("id", "active");
    const container = addactiveElement.parentElement;
    container.scrollTop = addactiveElement.offsetTop;



    // parentContainer.scrollTo({ behavior: 'smooth', block: 'start' });
    courseElement.setAttribute("id", "check");
  });
}




const certificateRight = ()=>{



     
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');




  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));
  
  // const currentCertificateMove = parseInt(certificateLeftValue);
 

  if((currentCertificateMove)>=totalCertificateWidthToMove-1){
    certificate.style.left = `${(0)}px`
  }

  else{
    certificate.style.left = `${(-currentCertificateMove-certificateWidth)}px`
  }

  
}

const certificateLeft = ()=>{

     
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');

  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));
 

  
  if((currentCertificateMove)<=1){
 
    certificate.style.left = `${(-totalCertificateWidthToMove)}px`
  }

   else{
    
    certificate.style.left = `${(-currentCertificateMove+certificateWidth)}px`
  } 
  
}


const movealumniright  =()=>{
  
  // clearInterval(alumniInterval)

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;


  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;


  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));


  if((currentMove)>=totalWidthToMove){
    
    alumni.style.left = `${(0)}px`
  }

  else{
    
    alumni.style.left = `${(-currentMove-alumniWidth)}px`
  } 
   
}
const movealumnileft  =()=>{


  // clearInterval(alumniInterval)

  const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;


  const alumni = document.querySelector('.alumni-image-detail-section');
  const computedStyle = window.getComputedStyle(alumni);
  const leftValue = computedStyle.getPropertyValue('left');

  const alumniWidth  = alumni.clientWidth;
  

  const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
  const currentMove = Math.abs(parseInt(leftValue));


  if((currentMove)<=0){
 
    alumni.style.left = `${(-totalWidthToMove)}px`
  }

  else{
    alumni.style.left = `${(-currentMove+alumniWidth)}px`
  } 
}


// function to limit the text in paragraph

const selector  = "review-text"
const maxLength  = 50;



let alumniInterval = null

window.onload = function() {

  console.log('hello loaded')
var meta = document.createElement('meta');
meta.httpEquiv = "X-UA-Compatible";
meta.content = "IE=edge";
meta.innerText = "hello this is meta"
document.getElementsByTagName('head')[0].appendChild(meta);
// meta close

// footer data fetch
  const footerContainer = document.getElementById("footer-section");
      let footerLoaded = false;
      console.log("outsiode condi")

      const triggerPosition = document.body.clientHeight - window.innerHeight;

    
        console.log("inside condi")
        fetch('/footer.html')
          .then(response => {
         
            return response.text();
          })
          .then(content => {
            footerContainer.innerHTML = content;

            // Make another fetch request to the URL to get the content
        
          })
          .catch(error => {
            console.error(error);
          });
      // footer data fetch



      // navbar data fetch


      
        const navContainer = document.getElementById("main-nav");
        let navLoaded = false;
        console.log("outsiode condi")

        const triggerPosition1 = document.body.clientHeight - window.innerHeight;

      
          console.log("inside condi")
          fetch('/navbar.html')
            .then(response => {
          
              return response.text();
            })
            .then(content => {
              navContainer.innerHTML = content;


              let dropdownCourse  = document.getElementsByClassName("course-name-dropdown");
  console.log("drop down",dropdownCourse)

  for(let i = 0; i<dropdownCourse.length; i++){
    console.log("for loop down")
    addDropdownListener(i)
  }


  function addDropdownListener(index){
    dropdownCourse[index].addEventListener("click" , function () {
      console.log('event listener')
      // document.querySelector('.dropdown').style.display = 'block'


      let activeElement = document.getElementById("active-dropdown-course");
      var activeCourses = document.getElementById("active-course");
      if (activeElement) {
        activeElement.removeAttribute("id");
        activeCourses.removeAttribute("id");
      }

      
      let dropdownCourseElement = document.getElementsByClassName('course-name-dropdown')[index];
      dropdownCourseElement.setAttribute("id", "active-dropdown-course");

      var addactiveCourses = document.getElementsByClassName('course-image-text')[index];
      addactiveCourses.setAttribute("id", "active-course");

    })
  }

              // Make another fetch request to the URL to get the content
          
            })
            .catch(error => {
              console.error(error);
            });


      // navbar data fetch
 





  var digits = document.querySelectorAll('.learner-number .digit');
digits.forEach(function(digit, index) {
  console.log("for each leramner")
  digit.style.animation = "fallingEffect 1s ease-in-out";
  digit.style.animationFillMode = "forwards";
  digit.style.animationDelay = (index + 1) * 0.1 + "s";
});

//   var awards = document.querySelectorAll('.awards-thumb');
//   awards.forEach(function(award, index) {
//     award.style.animation = "fallingEffect 1s ease-in-out";
//     award.style.animationFillMode = "forwards";
//     award.style.animationDelay = (index + 1) * 0.1 + "s";
// });



  // Function to handle intersection changes
  function handleIntersection(entries, observer) {
    console.log('handle intersection')
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('falling-effect');
        }, (index + 1) * 200); // Adjust the delay duration as needed
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer instance
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Get all the awards thumb elements
  var awards = document.querySelectorAll('.awards-thumb');
  let scalarCards = document.querySelectorAll('.scaler-reciper-card');
  let reviewCards = document.querySelectorAll('.review-card');

  // Observe each awards thumb element
  awards.forEach(function(award) {
    observer.observe(award);
  });

  // Observe each scalarCards thumb element
  scalarCards.forEach(function(scalarCard) {
    observer.observe(scalarCard);
  });

   // Observe each reviewCards thumb element
  reviewCards.forEach(function(reviewCard) {
    observer.observe(reviewCard);
  });






  

  // ------------- alumni auto crousel ------------------
  alumniInterval = setInterval(()=>{

    // ------------- alumni auto crousel ---------------

    const totalAlumniLenght  = document.getElementsByClassName('alumni-image-thumb').length;

  
    const alumni = document.querySelector('.alumni-image-detail-section');
    const computedStyle = window.getComputedStyle(alumni);
    const leftValue = computedStyle.getPropertyValue('left');
  
    const alumniWidth  = alumni.clientWidth;

  
    const totalWidthToMove = (totalAlumniLenght-1)*alumniWidth;
    const currentMove = Math.abs(parseInt(leftValue));
  
  
    if((currentMove)>=totalWidthToMove){
     
      alumni.style.left = `${(0)}px`
    }
  
    else{
    
      alumni.style.left = `${(-currentMove-alumniWidth)}px`
    }


    // --------- certificate auto crousel --------------
      
  const totalCertificateLenght  = document.getElementsByClassName('certicate-image').length;
 

  const certificate = document.querySelector('.certificate-right-box');
 

  const computedCertificateStyle = window.getComputedStyle(certificate);
  const certificateWidth = parseFloat(computedCertificateStyle.getPropertyValue('width'));
  const certificateLeftValue = computedCertificateStyle.getPropertyValue('left');




  const totalCertificateWidthToMove = (totalCertificateLenght-1)*certificateWidth;
  const currentCertificateMove = Math.abs(parseFloat(certificateLeftValue));

  // const currentCertificateMove = parseInt(certificateLeftValue);
  

  if((currentCertificateMove)>=totalCertificateWidthToMove-1){
    certificate.style.left = `${(0)}px`
  }

  else{
    certificate.style.left = `${(-currentCertificateMove-certificateWidth)}px`
  }

  },5000)
 



};




function expandText(index) {
  var targetElement = document.getElementById('review-text-' + index);
  let showHideText = document.getElementsByClassName('show-hide')[index];
  const reviewCard = document.getElementsByClassName('review-card')[index];

  
  const maxLength = 300;
  
  if (showHideText.innerText === "show more...") {
    showHideText.innerText = "show less";
  } else {
    showHideText.innerText = "show more...";
  }
  
  
  var computedStyle = window.getComputedStyle(targetElement);
  var currentHeight = computedStyle.getPropertyValue('height');

  // var computedReviewStyle = window.getComputedStyle(reviewCard);
  // var currentReviewHeight = computedStyle.getPropertyValue('height');
  
  if (currentHeight === '67px') {

    targetElement.style.height = `${targetElement.scrollHeight}px`;
    
    // targetElement.style.height = "auto";
    // reviewCard.style.height = 'auto'
  } else {
    targetElement.style.height = '67px';
    // reviewCard.style.height = '150px'
  }

  if (reviewCard.classList.contains('expanded')) {
    reviewCard.style.height = '200px';
    reviewCard.classList.remove('expanded');
  } else {
   
    // reviewCard.style.height = `${reviewCard.scrollHeight}px`;
    reviewCard.style.height = 'auto';

    reviewCard.classList.add('expanded');
  }
  
  
}


let popUpFormValue ={
  name:"",
  mobile:"",
  email:"",
  course:"",
  date:"",
  fromTime:"",
  toTime:""
}


function setPopUpFormValue(name, value){
  console.log('set up value',name,value)

  if(name==='fromTime' || name==='toTime'){
    var timeSplit = value.split(':'),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;

    if(hours<10){
      hours = `0${hours}`
    }
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }

  value = `${hours} : ${minutes} ${meridian}`
  popUpFormValue[name] = value
  }

  else{
 
  popUpFormValue[name] = value
  }
  console.log('pop up value =',popUpFormValue)
}



// }


// --------- Dropdown show function ------------




function showDropDown(index) {
  let firstDropDown = document.getElementsByClassName('dropdown')[0];
  let secondDropDown = document.getElementsByClassName('dropdown')[1];

  if (index === 0) {
      if (firstDropDown.style.display === "none") {
          if (window.innerWidth <= 780) {
              firstDropDown.style.display = "flex";
          } else {
              firstDropDown.style.display = "block";
          }
          document.getElementById('course-text').style.color = "#ff5421";
          secondDropDown.style.display = "none";
      } else {
          firstDropDown.style.display = "none";
          document.getElementById('course-text').style.color = "black";
      }
  } else if (index === 1) {
      if (secondDropDown.style.display === "none") {
          if (window.innerWidth <= 780) {
              secondDropDown.style.display = "flex";
          } else {
              secondDropDown.style.display = "block";
          }
          document.getElementById('course-text').style.color = "#ff5421";
          firstDropDown.style.display = "none";
      } else {
          secondDropDown.style.display = "none";
          document.getElementById('course-text').style.color = "black";
      }
  }
}



// ----------navigation show function------------


function showNavigation() {
  let navigation = document.querySelector('.navigation-container');
  var computedStyle = window.getComputedStyle(navigation);

  if (computedStyle.display === "none") {
    navigation.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    navigation.style.display = "none";
    document.body.style.overflow = "auto";
  }
}







function showVideo(url){
  
  
  
  var myFrame = document.querySelector("iframe");
  console.log("url =",url,myFrame)
  myFrame.src = `${url}`;

  let videoContainer = document.getElementById('videoContainer')
  document.getElementById('videoContainer').style.display="block"
 
  // document.getElementById('videoContainer').style.top="20%"

  videoContainer.style.animation = "fallingEffect .5s ease-in-out";
  videoContainer.style.animationFillMode = "forwards";
  document.body.style.overflow='hidden'
  
  document.getElementById('overlay').style.display="block"
  // videoContainer.classList.add('show');
}

function hideVideo(){
  document.getElementById('videoContainer').style.display="none"
  
 
  document.body.style.overflow='auto'
  document.getElementById('overlay').style.display="none"
  var myFrame = document.querySelector("iframe");


  myFrame.src = ""; 
}


// ---------- Form submit function---------


let formValue = {
  name:"",
  email:"",
  mobile:"",
  location:"",
  course:"",
  mode:""
}

function setFormValue(name,value){

  formValue[name]=value;



}

function numberOnly() {


  // Get element by id which passed as parameter within HTML element event
  var element = document.getElementById('mobile-input');
  // This removes any other character but numbers as entered by user
  element.value = element.value.replace(/[^0-9]/gi, "");

  if (element.value.length < 10) {
    element.setCustomValidity('Phone number must have at least 10 digits.');
  } else {
    element.setCustomValidity('');
  }
}

let downloadStatus =false;
let pdfUrl;

// All pdf link Here

let allPdf ={
DataAnalyticsBtn:'/pdf/Data-Science.pdf',
DataScienceBtn:'/pdf/DSA_Book.pdf',
FullStackBtn:'/pdf/DSA_Book.pdf',
SoftwareTestingBtn:'/pdf/DSA_Book.pdf',
DigitalMarketingBtn:'/pdf/DSA_Book.pdf',
PythonBtn:'/pdf/DSA_Book.pdf',
ArtficialIntelligenceBtn:'/pdf/DSA_Book.pdf',
AwsBtn:'/pdf/DSA_Book.pdf',
JavaBtn:'/pdf/DSA_Book.pdf',
BusinessAnalyticsBtn:'/pdf/DSA_Book.pdf',
MachineLearningBtn:'/pdf/DSA_Book.pdf',
AutomationTestingBtn:'/pdf/DSA_Book.pdf',
DevOpsBtn:'/pdf/DSA_Book.pdf',
ManualTestingBtn:'/pdf/DSA_Book.pdf',
DataAnalyticsPythonBtn:'/pdf/DSA_Book.pdf',
ReactBtn:'/pdf/DSA_Book.pdf',
FullStackNodeBtn:'/pdf/DSA_Book.pdf',
MeanBtn:'/pdf/DSA_Book.pdf',
MernBtn:'/pdf/DSA_Book.pdf',
AngularBtn:'/pdf/DSA_Book.pdf',
AIPythonBtn:'/pdf/DSA_Book.pdf',
MachineLearningPythonBtn:'/pdf/DSA_Book.pdf',
JavaReactBtn:'/pdf/DSA_Book.pdf',
WebDesignBtn:'/pdf/DSA_Book.pdf',
ISTQBBtn:'/pdf/DSA_Book.pdf',
UIBtn:'/pdf/DSA_Book.pdf',
  
}

function setDownload(option){

  downloadStatus = true;
  pdfUrl =allPdf[option]
  console.log('pdf =',pdfUrl,option,allPdf.option)

}

async function submitForm(event) {
  event.preventDefault(); 


  let data = new FormData();
  data.append('name', formValue.name);
  data.append('email', formValue.email);
  data.append('mobile', formValue.mobile);
  data.append('location', formValue.location);
 

  try{
    // const response = await axios.post('https://www.uncodemy.in/formSubmitUncodemyIn.php', data);
    const response = await axios.post('http://localhost/formSubmitUncodemyIn.php', data);
    console.log("response =",response)

    
    if(response.data===1){

      
  document.getElementById('form-parent').style.display="none"
  document.body.style.overflow='auto'
  document.getElementById('overlay').style.display="none"
  document.getElementById("form").reset();

      if(downloadStatus===true){
       window.open(pdfUrl, '_blank')
       console.log('pdf =',pdfUrl)
       downloadStatus = false
      }

      else{

      Swal.fire({
        icon: 'success',
        title: 'Congratulation!',
        html:`You are one step closer to have a <span style="color:#ff5124">Career Session</span> with our Experts. Our Team will connect you soon with Detail Information`,
        showConfirmButton: false,
        timer: 8000
      })
    }
         
    }

    else{
      
      alert("sorry some error is occured")
    
    }
  }
  catch(error) {
   console.log("error =",error.message)
    alert("sorry server issue occured please try again",error.message)
  };


}



async function submitPopUpForm(event) {
  event.preventDefault(); 


  let data = new FormData();
  data.append('name', popUpFormValue.name);
  data.append('email', popUpFormValue.email);
  data.append('mobile', popUpFormValue.mobile);
  data.append('course', popUpFormValue.course);
  data.append('date', popUpFormValue.date);
  data.append('fromTime', popUpFormValue.fromTime);
  data.append('toTime', popUpFormValue.toTime);
 

  try{
    // const response = await axios.post('https://www.uncodemy.in/DemoDetailForm.php', data);
    const response = await axios.post('http://localhost/DemoDetailForm.php', data);
    console.log("resposne =",response)



    
    if(response.data===1){

      document.querySelector('.pop-up-form-container').style.display="none"
      document.body.style.overflow='auto'
      document.getElementById('overlay').style.display="none"
      //  document.getElementById("form").reset();
      // document.querySelector('form-section form').reset();
      

      Swal.fire({
        icon: 'success',
        title: 'Congratulation!',
        html:`You Queries have been booked for the <span style="color:#ff5124">Demo Session</span> with our Experts. Our Team will connect you soon with Detail Information`,
        showConfirmButton: false,
        timer: 8000
      })
         
    }

    else{
      
      alert("sorry some error is occured")
    
    }
  }
  catch(error) {
    console.log("error =",error.message)
   
    alert("sorry server issue occured please try again")
  };


}


//  ---------- payment gateway -----------



// window.onload = function(){
// let pageNavigation = document.getElementsByClassName("page-navigation-btn");



//   // Select all the sections
// const sections = document.querySelectorAll('.navScollAt');
// console.log('sections',sections.length)

// // Options for the IntersectionObserver
// const options = {
//   threshold: 0.5 // Percentage of section visibility required to trigger the callback
// };

// // Callback function for the IntersectionObserver
// const callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const sectionId = entry.target.id;
//       const sectionIndex = Array.from(sections).findIndex(section => section.id === sectionId);
//       console.log('indesx=',sectionIndex)
//       let activePageNav = document.getElementById("active-page-navigation");
      
//       if (activePageNav) {
//         activePageNav.removeAttribute("id");
      
//       }

//       pageNavigation[sectionIndex].setAttribute("id", "active-page-navigation");

   
//       // Do something when the section is reached
//     }
//   });
// };

// // Create the IntersectionObserver
// const observer2 = new IntersectionObserver(callback, options);

// // Observe each section
// sections.forEach((section) => {
  
//   observer2.observe(section);
// });
// }



window.onscroll = ()=>{
  const scrollHeight = document.documentElement.scrollTop;

 
  const nav = document.querySelector('.nav-container')
  const pageNavigation = document.querySelector('.page-navigation');
  const navTop = document.querySelector('.nav-top-head');
  const courseBanner = document.querySelector('.course-banner');
 

  if(scrollHeight>=courseBanner.scrollHeight){
    pageNavigation.style.display='block';
    navTop.style.display='none';
    nav.style.display='none';
    console.log("scrolling",pageNavigation)
    // console.log('nav =',nav)
  }
  else{

  
    pageNavigation.style.display='none';

    if(window.innerWidth>900){
      navTop.style.display='flex';
      nav.style.display='flex';
    }
    // navTop.style.display='flex';
    else{
    nav.style.display='flex';
    navTop.style.display='inline-block';
    navTop.style.justifyContent= 'flex-end';
    }
  }
}

// ------------- page-navigation -----------

let pageNavigation = document.getElementsByClassName("page-navigation-btn");
const nav = document.querySelector('.nav-section')
let navScollAt = document.getElementsByClassName("navScollAt");




for(let i = 0; i<pageNavigation.length; i++){

  addNavigationEffect(i)
}


function addNavigationEffect(index){
 
  pageNavigation[index].addEventListener("click" , function () {
    // document.querySelector('.dropdown').style.display = 'block'

  
    console.log('page navigation')
    navScollAt[index].scrollIntoView()
    let activePageNav = document.getElementById("active-page-navigation");

    if (activePageNav) {
      activePageNav.removeAttribute("id");
    
    }

   
    
    // let dropdownCourseElement = document.getElementsByClassName('course-name-dropdown')[index];
    pageNavigation[index].setAttribute("id", "active-page-navigation");

    // var addactiveCourses = document.getElementsByClassName('course-image-text')[index];
    // addactiveCourses.setAttribute("id", "active-course");

  })
}



$(document).ready(function () {
    $(".read").click(function () {
        $(this).prev('.more').toggle();
        $(this).siblings('.dots').toggle();

        if ($(this).text() === 'Read more') {
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    });
});








///////////////////Animation video//////////////////////////

// Function to play or pause the video based on intersection
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        var video = entry.target;
        if (entry.isIntersecting) {
            if (!video.hasAttribute('data-played')) {
                video.play();
                video.setAttribute('data-played', 'true'); // Mark as played
            } else {
                video.play();
            }
        } else {
            video.pause();
        }
    });
}

// Intersection Observer options
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,

    once: true,
};

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe the video element
const video = document.querySelector('.why');
observer.observe(video);

// Pause the video and store the state when the user leaves the page
window.addEventListener('beforeunload', function () {
    if (!video.paused) {
        video.pause();
    }
});

// read more/////////////////
function toggleHiddenContent() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
      // Content is already expanded, so hide it
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
  } else {
      // Content is currently hidden, so expand it
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
  }
}


