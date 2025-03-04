document.addEventListener("DOMContentLoaded", () => {
  // Fetch the JSON data from the file
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(certificationsData => {
      console.log("Fetched data:", certificationsData); // Debugging: Log the fetched data

      // Loop through each certification category
      certificationsData.certifications.forEach(category => {
        const categoryWrapper = document.querySelector(`.cate.${category.category.toLowerCase()} .images`); // Target the correct container

        if (categoryWrapper) {
          category.cert.forEach(cert => {
            // Create a card for each certification
            const card = document.createElement("div");
            card.classList.add("card");

            // Add the image
            const image = document.createElement("img");
            image.src = cert.img;
            image.alt = cert.alt;
            card.appendChild(image);

            // Add the certification name
            const title = document.createElement("h4");
            title.textContent = cert.name;
            card.appendChild(title);

            // Add a button to view more details (optional)
            if (cert.url) {
              const button = document.createElement("button");
              button.textContent = "View Details";
              button.addEventListener("click", () => {
                window.open(cert.url, "_blank"); // Open the URL in a new tab
              });
              card.appendChild(button);
            }

            // Add the card to the category wrapper
            categoryWrapper.appendChild(card);
          });
        } 
      });
    })


  // Add event listeners for the buttons
  const buttons = document.querySelectorAll(".show");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.classList[1]; // Get the category from the button's class
      const imagesContainer = document.querySelector(`.cate.${category} .images`);

      if (imagesContainer.classList.contains("showCertification")) {
        imagesContainer.classList.remove("showCertification");
        this.innerHTML = `Show ${category} Certifications <i class="fa-solid fa-caret-down"></i>`;
      } else {
        imagesContainer.classList.add("showCertification");
        this.innerHTML = `Hide ${category} Certifications <i class="fa-solid fa-caret-up"></i>`;
      }
    });
  });
});