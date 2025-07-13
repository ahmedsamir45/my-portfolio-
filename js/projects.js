document.addEventListener('DOMContentLoaded', async function() {
    try {
      // Load data
      const response = await fetch('data.json');
      if (!response.ok) throw new Error('Failed to load data');
      const data = await response.json();
      
      // Initialize gallery
      const gallery = document.getElementById('projects-gallery');
      const tabsContainer = document.querySelector('.project-tabs');
      
      // Apply styles from JSON
      applyCustomStyles(data.styles);
      
      // Generate tabs
      generateTabs(data.categories, tabsContainer);
      
      // Render projects
      renderProjects(data.projects, gallery, 'all');
      
      // Set up tab switching
      setupTabNavigation(data.projects, gallery);
      
    } catch (error) {
      console.error('Error:', error);
      showError(gallery);
    }
  });
  
  function applyCustomStyles(styles) {
    const root = document.documentElement;
    root.style.setProperty('--background-color', styles.colors.background);
    root.style.setProperty('--nav-color', styles.colors.nav);
    root.style.setProperty('--heading-color', styles.colors.heading);
    root.style.setProperty('--hover-heading', styles.colors.hover);
    root.style.setProperty('--addition-color', styles.colors.accent);
  }
  
  function generateTabs(categories, container) {
    container.innerHTML = '';
    
    categories.forEach(category => {
      const tab = document.createElement('button');
      tab.className = 'project-tab';
      tab.dataset.category = category.id;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', 'false');
      tab.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name}`;
      container.appendChild(tab);
    });
    
    // Activate first tab by default
    if (categories.length > 0) {
      const firstTab = container.querySelector('.project-tab');
      firstTab.classList.add('active');
      firstTab.setAttribute('aria-selected', 'true');
    }
  }
  
  function renderProjects(projects, container, category) {
    container.innerHTML = '';
    
    const filteredProjects = category === 'all' 
      ? projects 
      : projects.filter(project => project.category === category);
    
    if (filteredProjects.length === 0) {
      container.innerHTML = `
        <div class="no-projects">
          <i class="fas fa-folder-open"></i>
          <p>No projects found in this category</p>
        </div>
      `;
      return;
    }
    
    filteredProjects.forEach((project, index) => {
      createProjectCard(project, container, index);
    });
  }
  
  function createProjectCard(project, container, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Generate links HTML
    const linksHTML = project.links.map(link => {
      const iconClass = link.icon || 
        (link.type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt');
      return `
        <a href="${link.url}" class="project-link ${link.type}-link" target="_blank" rel="noopener noreferrer">
          <i class="${iconClass}"></i> ${link.type === 'github' ? 'Code' : 'Demo'}
        </a>
      `;
    }).join('');
    
    // Generate tech badges HTML
    const techHTML = project.tech.map(tech => 
      `<span class="tech-badge">${tech}</span>`
    ).join(', ');
    
    card.innerHTML = `
      <div class="project-img-container">
        <img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="tech-stack">${techHTML}</div>
        <div class="project-links">${linksHTML}</div>
      </div>
    `;
    
    container.appendChild(card);
  }
  
  function setupTabNavigation(projects, gallery) {
    const tabs = document.querySelectorAll('.project-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Update active tab
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        
        // Render projects for selected category
        renderProjects(projects, gallery, this.dataset.category);
      });
    });
  }
  
  function showError(container) {
    container.innerHTML = `
      <div class="no-projects error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Failed to load projects. Please try again later.</p>
      </div>
    `;
  }