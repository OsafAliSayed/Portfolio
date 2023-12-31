const navbar_items = document.querySelectorAll(".navbar-items");
const pages = [document.querySelector(".home"), document.querySelector(".about"), document.querySelector(".services"), document.querySelector(".skills"), document.querySelector(".projects"), document.querySelector(".contact")];
let prev_active = document.querySelector(".home")
navbar_items.forEach(item => {
  item.addEventListener("click", display_page_click)
})

function display_page_click() {
  console.log("Clicked!");
  display_page(this.dataset.page);
}
function display_page(page_name) {
  pages.forEach(page => {
    if (page.classList.contains(page_name)) {
      prev_active.classList.remove("display-flex");
      prev_active.classList.remove("visibility");
      page.classList.add("display-flex");
      var delayInMilliseconds = 20; //1 second
      setTimeout(function() {
        //your code to be executed after 1 second
        page.classList.add("visibility");
      }, delayInMilliseconds);
      prev_active = document.querySelector("." + page_name);
      
    }
  })
}

pages.forEach(page => {
  if (page.classList.contains("home")) {
    page.classList.add("display-flex");
    var delayInMilliseconds = 20; //1 second
    setTimeout(function() {
      //your code to be executed after 1 second
      page.classList.add("visibility");
    }, delayInMilliseconds);
  }
})
