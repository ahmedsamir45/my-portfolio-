
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the JSON data from the file
    fetch('../data/data.json')
      .then(response => response.json())
      .then(certificationsData => {
        console.log(certificationsData); // Log the content to check its structure
        
        // Loop through each certification category
        certificationsData["certifications"].forEach(category => {
          let categoryWrapper = document.querySelector(`.cate.${category["category"]} .images`); // Target the correct container
          
          if (categoryWrapper) {
            category["images"].forEach(imgSrc => {
              let image = document.createElement("img");
              image.src = imgSrc; // Set the image source
              image.alt = category["alt"]; // Set the alt text
              categoryWrapper.appendChild(image); // Add the image to the container
            });
          } else {
            console.error(`Element '.cate .${category["category"]} .images' not found`);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
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