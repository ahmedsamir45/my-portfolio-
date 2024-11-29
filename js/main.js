// start navbar 
nav = document.getElementsByTagName("nav")
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
    // sidebar.classList.add("activesidebar")
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = "none"
    // sidebar.classList.remove("activesidebar")
  }
links = document.querySelectorAll(".sidebar  li a")

links.forEach((link) => {
  link.addEventListener("click", () => {
    hideSidebar()
  })
})
// start media query 
function handleMediaQuery(mediaQuery) {
  const sidebar = document.querySelector('.sidebar');
  if (mediaQuery.matches) {
    // If the media query matches (viewport width is at least 920px), hide the sidebar
    sidebar.style.display = 'none';
  }
}

// Define the media query
const mediaQuery = window.matchMedia('(min-width: 920px)');



// Listen for changes in the media query
mediaQuery.addListener(handleMediaQuery);
// end of media query


// end navbar


// start image slider projects 
const cardWrapper = document.querySelector('.card-wrapper')
const widthToScroll = cardWrapper.children[0].offsetWidth
const arrowPrev = document.querySelector('.arrow.prev')
const arrowNext = document.querySelector('.arrow.next')
const cardBounding = cardWrapper.getBoundingClientRect()


let currScroll = 0
let initPos = 0
let clicked = false

var no_projects = [...document.querySelectorAll(".card-item")].length
console.log(no_projects)

arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll
}

arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll
}

cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
}

cardWrapper.onmousemove = function(e) {
  if(clicked) {
    const xPos = e.clientX - cardBounding.left
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
}

// end image slider projects 


// const urlPageTitle = "JS Single Page Application Router";

// // Define routes with paths to your templates
// const urlRoutes = {
//   404: {
//     template: "templates/404.html", // Adjusted path
//     title: "404 | " + urlPageTitle,
//     description: "Page not found",
//   },
//   "/": {
//     template: "templates/index.html",
//     title: "Home | " + urlPageTitle,
//     description: "This is the home page",
//   },
//   "/about": {
//     template: "templates/about.html",
//     title: "About Us | " + urlPageTitle,
//     description: "This is the about page",
//   },
//   "/contact": {
//     template: "templates/contact.html",
//     title: "Contact Us | " + urlPageTitle,
//     description: "This is the contact page",
//   },
//   "/certifications": {
//     template: "templates/certifications.html",
//     title: "Certifications | " + urlPageTitle,
//     description: "This is the certifications page",
//   },
//   "/projects": {
//     template: "templates/projects.html",
//     title: "Projects | " + urlPageTitle,
//     description: "This is the projects page",
//   },
// };

// // Function to handle navigation
// const urlRoute = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   const targetLink = event.currentTarget.getAttribute("href");
//   window.history.pushState({}, "", targetLink);
//   urlLocationHandler();
// };

// // Function to handle URL location changes
// const urlLocationHandler = async () => {
//   let location = window.location.pathname;
//   if (location.length === 0) location = "/";

//   const route = urlRoutes[location] || urlRoutes["404"];

//   try {
//     const html = await fetch(route.template).then((response) => {
//       if (!response.ok) throw new Error("Failed to load template");
//       return response.text();
//     });

//     document.getElementById("content").innerHTML = html;
//     document.title = route.title;
//     document
//       .querySelector('meta[name="description"]')
//       .setAttribute("content", route.description);
//   } catch (error) {
//     console.error("Error loading page:", error);
//     document.getElementById("content").innerHTML = "<h1>Error loading page</h1>";
//   }
// };

// // Event listener for navigation links
// document.addEventListener("click", (e) => {
//   const target = e.target.closest("nav a"); // Ensure it's a nav link
//   if (!target) return;
//   e.preventDefault();
//   urlRoute(e);
// });

// // Handle browser navigation (back/forward)
// window.onpopstate = urlLocationHandler;

// // Initial page load handling
// urlLocationHandler();
