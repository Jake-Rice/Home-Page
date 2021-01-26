let menu_isOpen = false;

function toggleMenu() {
    
    if (!menu_isOpen) {
        document.querySelector("button.btn-hamburger-menu").classList.add("menu-is-open");
        menu_isOpen=true;
    }
    else {
        menu_isOpen = false;
        document.querySelector("button.btn-hamburger-menu").classList.remove("menu-is-open");
    }
}



// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (menu_isOpen && e.matches) {
    // Then log the following message to the console
    toggleMenu();
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)