// ============================== Navbar ==============================

let menu_isOpen = false;

function toggleMenu() {
    
    if (!menu_isOpen) {
      
        document.querySelector(".menu").classList.remove("menu-disappear");
        document.querySelector("button.btn-hamburger-menu").classList.add("menu-is-open");
        document.querySelector(".menu").classList.remove("menu-hidden");
        menu_isOpen=true;
    }
    else {
        document.querySelector(".menu").classList.remove("menu-disappear");
        document.querySelector("button.btn-hamburger-menu").classList.remove("menu-is-open");
        document.querySelector(".menu").classList.add("menu-hidden");        
        menu_isOpen = false;
    }
}



// Create a condition that targets viewports at least 768px wide
const mq_grow = window.matchMedia('(min-width: 768px)');

function screenGrow(e) {
  // Check if the media query is true
  if (e.matches && document.querySelector(".menu")!=null) {
    // Then log the following message to the console
    document.querySelector(".menu").classList.remove("menu-disappear");
    if (menu_isOpen) toggleMenu();
    document.querySelector(".btn-signup").classList.remove("btn-navbar");
  }
}

// Register event listener
mq_grow.addEventListener("change", screenGrow);

// Initial check
screenGrow(mq_grow);



// Create a condition that targets viewports at most 767px wide
const mq_shrink = window.matchMedia('(max-width: 767px)');

function screenShrink(e) {
  // Check if the media query is true
  if (e.matches && document.querySelector(".menu")!=null) {
    // Then log the following message to the console
    document.querySelector(".menu").classList.add("menu-disappear", "menu-hidden");
    document.querySelector(".btn-signup").classList.add("btn-navbar");
  }
}

// Register event listener
mq_shrink.addEventListener("change", screenShrink);

// Initial check
screenShrink(mq_shrink);