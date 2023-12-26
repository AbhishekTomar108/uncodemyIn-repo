// Function to load external scripts
function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

// Function to initialize FastClick
function initializeFastClick() {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    });
  }
}

// Function to handle "Know More" button click
function handleKnowMoreClick(event) {
  event.preventDefault(); // Prevent the default behavior of the button click

  // Get the parent anchor's href attribute
  const targetUrl = event.currentTarget.closest('a').getAttribute('href');

  // Check if a valid URL is provided
  if (targetUrl) {
    window.location.href = targetUrl; // Redirect to the specified URL
  }
}

// Load FastClick dynamically and initialize it
loadScript('https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js', function() {
  // Initialize FastClick after it has been loaded
  initializeFastClick();

  // Add a click event listener to all elements with class "glow-on-hover"
  const knowMoreButtons = document.querySelectorAll('.glow-on-hover');
  knowMoreButtons.forEach(button => {
    button.addEventListener('click', handleKnowMoreClick);
  });
});



// form.js

// Function to create the main form dynamically

console.log("outside form js running")
function createForm() {
  console.log("form js running")
    const formParent = document.createElement('div');
    formParent.id = 'form-parent';
  
    const formMainContainer = document.createElement('div');
    formMainContainer.classList.add('form-main-container', 'main-container');
  
    const closeButton = document.createElement('i');
    closeButton.classList.add('fa-sharp', 'fa-solid', 'fa-square-xmark');
    closeButton.style.color = '#ff5421';
    closeButton.onclick = hideForm;
  
    const formHeaderContainer = document.createElement('div');
    formHeaderContainer.classList.add('form-header-container');
    const headerSection = document.createElement('div');
    headerSection.classList.add('header-section');
    headerSection.textContent = 'Application Form';
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
  
    const form = document.createElement('form');
    form.onsubmit = submitForm;
    form.id = 'form';
  
    const inputNameSection = createInputSection('text', 'name', 'Name');
    const inputEmailSection = createInputSection('email', 'email', 'Email Address');
    const inputPhoneSection = createInputSection('tel', 'mobile', 'Phone Number');
    const inputLocationSection = createInputSection('text', 'location', 'Location');
  
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.classList.add('submit-btn');
  
    formContainer.append(form);
    form.append(inputNameSection, inputEmailSection, inputPhoneSection, inputLocationSection, submitButton);
    formHeaderContainer.append(headerSection, formContainer);
    formMainContainer.append(closeButton, formHeaderContainer);
    formParent.append(formMainContainer);
  
    document.body.appendChild(formParent);
  }
  
  function createInputSection(type, name, label) {
    const inputSection = document.createElement('div');
    inputSection.classList.add('input-section', 'name-section');
  
    const input = document.createElement('input');
    input.type = type;
    input.required = true;
    input.name = name;
    input.onchange = function() {
      setFormValue(this.name, this.value);
    };
  
    const inputLabel = document.createElement('label');
    inputLabel.textContent = label;
  
    inputSection.append(input, inputLabel);
  
    return inputSection;
  }
  
  function showForm() {

    createForm();
      
    displayForm()
  }

  function displayForm(){
    const formContainer = document.getElementById('form-parent');
    formContainer.style.display = 'block';
      document.getElementById('overlay').style.display = 'block';

  }
  
  function hideForm() {
    const formContainer = document.getElementById('form-parent');
    if (formContainer) {
      formContainer.style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }
  }
  
  function submitForm(event) {
    event.preventDefault();
    // Add your main form submission logic here, if needed.
  }
  
  function setFormValue(fieldName, value) {
    // Add your logic to set form values, if needed.
  }
  
  function numberOnly() {
    // Add your logic for accepting numbers only, if needed.
  }
  
  // Function to create the pop-up form dynamically
  function createPopUpForm() {
    const popUpFormContainer = document.createElement('div');
    popUpFormContainer.classList.add('pop-up-form-container');
  
    const formSection = document.createElement('div');
    formSection.classList.add('form-section');
  
    const closeButton = document.createElement('i');
    closeButton.classList.add('fa-sharp', 'fa-solid', 'fa-square-xmark');
    closeButton.style.color = '#ff5421';
    closeButton.onclick = hidePopUpForm;
  
    const formTopHead = document.createElement('div');
    formTopHead.classList.add('form-top-head');
    formTopHead.textContent = 'Application Form';
  
    const form = document.createElement('form');
    form.onsubmit = submitPopUpForm;
  
    const inputName = createInput('text', 'name', 'Enter Your Name*', true, setPopUpFormValue);
    const inputMobile = createInput('tel', 'mobile', 'Enter Your Phone No.*', true, numberOnly, setPopUpFormValue);
    const inputEmail = createInput('email', 'email', 'Enter Your Email*', true, setPopUpFormValue);
  
    const selectCourse = document.createElement('select');
    selectCourse.name = 'course';
    selectCourse.required = true;
    selectCourse.addEventListener('change', function() {
      const selectedCourse = selectCourse.value;
      setPopUpFormValue('course', selectedCourse);
    });
  
    const defaultOptionElement = document.createElement('option');
    defaultOptionElement.selected = true;
    defaultOptionElement.disabled = true;
    defaultOptionElement.textContent = 'Select Your Course';
  
    const options = [
      'Data Science',
      'Full Stack Development',
      'Software Testing',
      'Digital Marketing',
      'Network & Security'
    ];
  
    selectCourse.appendChild(defaultOptionElement);
  
    for (const optionText of options) {
      const option = document.createElement('option');
      option.textContent = optionText;
      selectCourse.appendChild(option);
    }
  
    const scheduleDate = document.createElement('div');
    scheduleDate.classList.add('schedule-date', 'schedule');
    const inputDate = createInput('date', 'date', 'dd-mm-yyyy', true, setPopUpFormValue);
    const labelDate = document.createElement('label');
    labelDate.textContent = 'dd-mm-yyyy';
    scheduleDate.append(inputDate, labelDate);
  
    const scheduleTime = document.createElement('div');
    scheduleTime.classList.add('schedule-time');
  
    const inputFromTime = createInput('time', 'fromTime', 'From*', true, setPopUpFormValue);
    const labelFromTime = document.createElement('label');
    labelFromTime.textContent = 'From*';
    const inputToTime = createInput('time', 'toTime', 'To*', true, setPopUpFormValue);
    const labelToTime = document.createElement('label');
    labelToTime.textContent = 'To*';
  
    scheduleTime.append(inputFromTime, labelFromTime, inputToTime, labelToTime);
  
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.classList.add('submit-btn');
  
    form.append(inputName, inputMobile, inputEmail, selectCourse, inputDate, inputFromTime, inputToTime, submitButton);
    formSection.append(closeButton, formTopHead, form);
    popUpFormContainer.append(formSection);
  
    document.body.appendChild(popUpFormContainer);
  }
  
  function createInput(type, name, placeholder, required, onchange, setFormValue) {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.required = required;
    if (onchange) {
      input.onchange = function () {
        onchange.call(null, this.name, this.value);
      };
    }
    if (setFormValue) {
      input.onchange = function () {
        setFormValue.call(null, this.name, this.value);
      };
    }
    return input;
  }
  
  // function showPopUpForm() {
  //   console.log("show pop up form")
  //   const popUpFormContainer = document.querySelector('.pop-up-form-container');
  //   if (popUpFormContainer) { 
      
  //     createPopUpForm();
  //     popUpFormContainer.style.display = 'block';
  //     document.getElementById('overlay').style.display = 'block';
  //   } else {
  //     createPopUpForm();
  //   }
  // }
  
  function showPopUpForm() {
    console.log("show pop up form")
  
      
      createPopUpForm();
      displayPopForm()
      
     
   
  }

  function displayPopForm(){
    const popUpFormContainer = document.querySelector('.pop-up-form-container');
    popUpFormContainer.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
   

  }
  function hidePopUpForm() {
    const popUpFormContainer = document.querySelector('.pop-up-form-container');
    if (popUpFormContainer) {
      popUpFormContainer.style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
    }
  }
  
  function submitPopUpForm(event) {
    event.preventDefault();
    // Add your pop-up form submission logic here, if needed.
  }
  
  function setPopUpFormValue(fieldName, value) {
    // Add your logic to set form values for the pop-up form, if needed.
  }
  
  // Call showForm() to create and display the main form on page load
  // showForm();
  
  // Call showPopUpForm() to create and display the pop-up form on page load
  // showPopUpForm();
  



let isDropdownVisible = false;

function toggleDropdown(index) {
    const dropdown = document.querySelectorAll('.dropdown-course')[index];
    isDropdownVisible = !isDropdownVisible;
    dropdown.style.display = isDropdownVisible ? 'block' : 'none';
}

function handleScroll() {
    const navbar = document.querySelector('#main-nav');
    // Check if the screen width is greater than 1000px
    if (window.innerWidth > 1000) {
        if (window.scrollY > 0) {
            navbar.classList.add('fixed');
            // Hide dropdowns when the navbar becomes fixed
            document.querySelectorAll('.dropdown-course').forEach((dropdown) => {
                dropdown.style.display = 'none';
            });
            isDropdownVisible = false;
        } else {
            navbar.classList.remove('fixed');
        }
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
