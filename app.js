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
  
    document.querySelector("#theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
  
