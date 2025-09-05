// Animate skill bars when scrolling into view
document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector('.skills-section');
  const skillFills = document.querySelectorAll('.skill-fill');

  function animateSkills() {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
      skillFills.forEach((fill, index) => {
        // Optional: stagger animation for nicer effect
        setTimeout(() => {
          fill.style.width = fill.style.getPropertyValue('--fill');
        }, index * 150); // 150ms delay between each bar
      });
      // Remove event listener once animated
      window.removeEventListener('scroll', animateSkills);
    }
  }

  window.addEventListener('scroll', animateSkills);
  // Trigger in case section is already in view
  animateSkills();
});


