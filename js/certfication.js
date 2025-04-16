document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('cert-gallery');
  const tabsContainer = document.querySelector('.cert-tabs');
  let allCertifications = [];
  
  // Tab data - we'll generate these dynamically
  const tabData = [
      { category: 'ai', icon: 'brain', label: 'AI' },
      { category: 'back', icon: 'server', label: 'Backend' },
      { category: 'cyber', icon: 'shield-alt', label: 'Security' },
      { category: 'front', icon: 'code', label: 'Frontend' },
      { category: 'python', icon: 'python', label: 'Python' },
      { category: 'all', icon: 'certificate', label: 'All' }
  ];

  // Function to generate tabs
  function generateTabs() {
      // Clear existing tabs
      tabsContainer.innerHTML = '';
      
      // Create all tabs except 'All'
      tabData.filter(tab => tab.category !== 'all').forEach(tab => {
          const tabButton = document.createElement('button');
          tabButton.className = 'cert-tab';
          tabButton.dataset.category = tab.category;
          tabButton.setAttribute('role', 'tab');
          tabButton.setAttribute('aria-selected', 'false');
          tabButton.innerHTML = `<i class="fas fa-${tab.icon}"></i> ${tab.label}`;
          tabsContainer.appendChild(tabButton);
      });
      
      // Create 'All' tab and add it to the end
      const allTab = tabData.find(tab => tab.category === 'all');
      if (allTab) {
          const tabButton = document.createElement('button');
          tabButton.className = 'cert-tab';
          tabButton.dataset.category = allTab.category;
          tabButton.setAttribute('role', 'tab');
          tabButton.setAttribute('aria-selected', 'false');
          tabButton.innerHTML = `<i class="fas fa-${allTab.icon}"></i> ${allTab.label}`;
          tabsContainer.appendChild(tabButton);
      }
  }

  // Load JSON data
  fetch('data.json')
      .then(response => {
          if (!response.ok) throw new Error('Failed to load data');
          return response.json();
      })
      .then(data => {
          allCertifications = data.certifications;
          
          // Generate tabs dynamically
          generateTabs();
          
          // Get all tab buttons after they're generated
          const tabButtons = document.querySelectorAll('.cert-tab');
          
          // Activate the first category tab by default (skip 'All' tab)
          if (tabButtons.length > 0 && allCertifications.length > 0) {
              // Find the first tab that isn't 'All'
              const firstNonAllTab = Array.from(tabButtons).find(btn => 
                  btn.dataset.category !== 'all' && 
                  allCertifications.some(cat => cat.shortcut === btn.dataset.category)
              );
              
              // Default to first tab if available, otherwise use 'All'
              const defaultTab = firstNonAllTab || tabButtons[tabButtons.length - 1];
              
              // Activate the default tab
              defaultTab.classList.add('active');
              defaultTab.setAttribute('aria-selected', 'true');
              
              // Render certifications for default category
              renderCertifications(defaultTab.dataset.category);
          }
          
          // Add click event listeners to all tabs
          tabButtons.forEach(button => {
              button.addEventListener('click', function() {
                  tabButtons.forEach(btn => {
                      btn.classList.remove('active');
                      btn.setAttribute('aria-selected', 'false');
                  });
                  this.classList.add('active');
                  this.setAttribute('aria-selected', 'true');
                  renderCertifications(this.dataset.category);
              });
          });
      })
      .catch(error => {
          console.error('Error:', error);
          gallery.innerHTML = `
              <div class="no-certs">
                  <i class="fas fa-exclamation-circle"></i>
                  <p>Could not load certifications. Please refresh the page.</p>
              </div>
          `;
      });

  // Render certifications
  function renderCertifications(category) {
      gallery.innerHTML = '';
      
      if (category === 'all') {
          allCertifications.forEach(categoryData => {
              categoryData.cert.forEach((cert, index) => {
                  createCertCard(cert, categoryData.category, index);
              });
          });
      } else {
          const categoryData = allCertifications.find(cat => cat.shortcut === category);
          
          if (categoryData?.cert?.length) {
              categoryData.cert.forEach((cert, index) => {
                  createCertCard(cert, categoryData.category, index);
              });
          } else {
              gallery.innerHTML = `
                  <div class="no-certs">
                      <i class="fas fa-certificate"></i>
                      <p>No certifications in this category yet</p>
                  </div>
              `;
          }
      }
  }

  // Create individual certification card
  function createCertCard(cert, categoryName, index) {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.style.animationDelay = `${index * 0.1}s`;
      
      card.innerHTML = `
          <div class="cert-img-container">
              <img 
                  class="cert-img" 
                  src="${cert.img}" 
                  alt="${cert.alt || cert.name}" 
                  loading="lazy"
              >
          </div>
          <div class="cert-content">
              <h3 class="cert-title">${cert.name}</h3>
              <div class="cert-meta">
                  <span class="cert-category">${categoryName}</span>
                  ${cert.url ? `
                  <a href="${cert.url}" class="cert-link" target="_blank" rel="noopener noreferrer">
                      View <i class="fas fa-external-link-alt"></i>
                  </a>
                  ` : ''}
              </div>
          </div>
      `;
      
      gallery.appendChild(card);
  }
});