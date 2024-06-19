
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