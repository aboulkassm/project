document.addEventListener("DOMContentLoaded", function() {
  const controlButtons = [...document.querySelectorAll('.control:not(#theme-btn)')];
  const sections = [...document.querySelectorAll('section')];

  controlButtons.forEach(button => {
    button.addEventListener("click", function() {
      controlButtons.forEach(btn => {
        btn.classList.remove("active-btn");
      });
      this.classList.add("active-btn");

      sections.forEach(section => {
        section.classList.remove("active");
      });

      const targetSectionId = this.dataset.id;
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const astronotebookItem = document.getElementById('astronotebook-item');
    const astronotebookDetails = document.getElementById('astronotebook-details');
  
    astronotebookItem.addEventListener('click', function() {
      astronotebookDetails.classList.toggle('show-details');
    });
  });

  document.querySelector("#theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
    // Save the current theme in localStorage.
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.setItem("theme", "dark-mode");
    }
  });

  // Check for saved theme in LocalStorage when page loads
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});
