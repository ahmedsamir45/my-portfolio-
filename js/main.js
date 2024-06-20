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