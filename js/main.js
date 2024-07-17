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

function sendEmail(){
  Email.send({
      SecureToken : "04cb182d-52c7-4443-8204-b5216c1736d3",
      To : "ahmedsamir3bas@gmail.com",
      From : "ahmedsamir3bas@gmail.com",
      Subject : "portfolio email",
      Body : "name:  " + document.getElementById("name").value 
          + "<br> Email:  " + document.getElementById("email").value
          + "<br> message no:  " + document.getElementById("message").value
  }).then(
    message => alert("message sent succesfully")
  );
}

// start certfication 

// ai
btnAI = document.querySelector(".show.ai");
cateAI = document.querySelector(".images.ai");

btnAI.addEventListener("click", function() {
  if (cateAI.classList.contains("showCertification")) {
    cateAI.classList.remove("showCertification");
    btnAI.innerHTML = "Show AI Certfications"+ ` <i class="fa-solid fa-caret-down"></i>`
  } else {
    cateAI.classList.add("showCertification");
    btnAI.innerHTML = "Hide AI Certfications"+ ` <i class="fa-solid fa-caret-up"></i>`
  }
});

// front end
btnfrontend = document.querySelector(".show.frontend");
catefrontend = document.querySelector(".images.frontend");

btnfrontend.addEventListener("click", function() {
  if (catefrontend.classList.contains("showCertification")) {
    catefrontend.classList.remove("showCertification");
    btnfrontend.innerHTML = "Show Front End Certifications" + ` <i class="fa-solid fa-caret-down"></i>`;
  } else {
    catefrontend.classList.add("showCertification");
    btnfrontend.innerHTML = "Hide Front End Certifications"+ ` <i class="fa-solid fa-caret-up"></i>`;
  }
});

// back end
btnbackend = document.querySelector(".show.backend");
catebackend = document.querySelector(".images.backend");

btnbackend.addEventListener("click", function() {
  if (catebackend.classList.contains("showCertification")) {
    catebackend.classList.remove("showCertification");
    btnbackend.innerHTML = "Show back End Certifications" + ` <i class="fa-solid fa-caret-down"></i>`;
  } else {
    catebackend.classList.add("showCertification");
    btnbackend.innerHTML = "Hide back End Certifications"+ ` <i class="fa-solid fa-caret-up"></i>`;
  }
});

//  cyber
btncyber = document.querySelector(".show.cyber");
catecyber = document.querySelector(".images.cyber");

btncyber.addEventListener("click", function() {
  if (catecyber.classList.contains("showCertification")) {
    catecyber.classList.remove("showCertification");
    btncyber.innerHTML = "Show cyber security Certifications" + ` <i class="fa-solid fa-caret-down"></i>`;
  } else {
    catecyber.classList.add("showCertification");
    btncyber.innerHTML = "Hide cyber security Certifications"+ ` <i class="fa-solid fa-caret-up"></i>`;
  }
});

// python
btnpython = document.querySelector(".show.python");
catepython = document.querySelector(".images.python");

btnpython.addEventListener("click", function() {
  if (catepython.classList.contains("showCertification")) {
    catepython.classList.remove("showCertification");
    btnpython.innerHTML = "Show python Certifications"+ ` <i class="fa-solid fa-caret-down"></i>`;
  } else {
    catepython.classList.add("showCertification");
    btnpython.innerHTML = "Hide python Certifications"+ ` <i class="fa-solid fa-caret-up"></i>`;
  }
});

// UI/UX
btnux = document.querySelector(".show.ux");
cateux = document.querySelector(".images.ux");

btnux.addEventListener("click", function() {
  if (cateux.classList.contains("showCertification")) {
    cateux.classList.remove("showCertification");
    btnux.innerHTML = "Show UI/UX Certifications" + ` <i class="fa-solid fa-caret-down"></i>`;
  } else {
    cateux.classList.add("showCertification");
    btnux.innerHTML = "Hide UI/UX Certifications"+ ` <i class="fa-solid fa-caret-up"></i>`;
  }
});

// others
btnothers = document.querySelector(".show.others");
cateothers = document.querySelector(".images.others");

btnothers.addEventListener("click", function() {
  if (cateothers.classList.contains("showCertification")) {
    cateothers.classList.remove("showCertification");
    btnothers.innerHTML = "Show other Certifications"+`<i class="fa-solid fa-caret-down"></i>`;
  } else {
    cateothers.classList.add("showCertification");
    btnothers.innerHTML = "Hide other Certifications"+ `<i class="fa-solid fa-caret-up"></i>`;
  }
});
