document.addEventListener("DOMContentLoaded", function() {
    const observerConfig = {
      threshold: 0.3,
    };
  
    function animateElement(elementId, nextElementId) {
      const element = document.getElementById(elementId);
      const nextElement = document.getElementById(nextElementId);
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
            if (nextElement) observer.observe(nextElement);
          }
        });
      }, observerConfig);
  
      observer.observe(element);
    }
  
    animateElement("animate-name", "animate-tag");
    animateElement("animate-tag", "animate-companies");
    animateElement("animate-companies", "animate-next3");
    animateElement("animate-next3", "animate-next1");
    animateElement("animate-next1", "animate-next4");
    animateElement("animate-next4", "animate-next2");
    animateElement("animate-next2", "animate-next5");
    animateElement("animate-next5", "animate-next6");
    animateElement("animate-next6", null); // No next element
  });
  