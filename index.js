//code for circular progressbar
//getting progressBar and percentage;
let progressBar = document.querySelectorAll(".circles");
let skillBoard = document.querySelector(".skill-board");
let isLoaded = false;
function progress() 
{
    //do not execute the function if progress bar is already loaded
    if (isLoaded) return;
    const slideInAt = (window.scrollY + window.innerHeight) - skillBoard.clientHeight / 2;
    //bottom of the image
    // const imageBottom = element.offsetTop + skillBoard.clientHeight;

    const isHalfShown = slideInAt > skillBoard.offsetTop;
    if(isHalfShown)
    {
        progressBar.forEach(element => {
            let start = 0; 
            let percentage = element.querySelector(".percentage");
            let end = parseInt(percentage.dataset.percentage);
            let progress = setInterval(() => {
                start++;
                var gradient = `conic-gradient(var(--tertiary) ${start * 3.6}deg, var(--secondary) ${start * 3.6}deg 360deg)`
                // percentage.textContent = `${start}%`;
                element.style.background = gradient;
                if (start == end)
                 clearInterval(progress);
            }, 20);
        })
        isLoaded = true;
    }
}
    
// code for image slide in
//makes site less janky by reduces number of times the function runs on scroll
function debounce(func, wait = 2, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide()
{
sliderImages.forEach(sliderImage => {
    //half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

    //bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast)
    {
    sliderImage.classList.add('active');
    }
    else
    {
    sliderImage.classList.remove('active');  
    }
});
}

//code for navbar
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

//event listeners
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
window.addEventListener('scroll', debounce(checkSlide));
window.addEventListener('scroll', debounce(progress));