document.addEventListener("DOMContentLoaded", function() {
    const name = document.getElementById('animate-name');
    const tag = document.getElementById('animate-tag');
    const companiesSection = document.getElementById('animate-companies');
    const nextElement1 = document.getElementById('animate-next1');
    const nextElement2 = document.getElementById('animate-next2');
    const nextElement3 = document.getElementById('animate-next3');
    const nextElement4 = document.getElementById('animate-next4');
    const nextElement5 = document.getElementById('animate-next5');
    const nextElement6 = document.getElementById('animate-next6');
  
  
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer2.observe(name);
        }
      });
    });
  
    observer1.observe(tag);
  
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer3.observe(tag);
        }
      });
    });
  
    observer2.observe(companiesSection);
  
    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer4.observe(companiesSection);
        }
      });
    });
  
    observer3.observe(nextElement3);
  
    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer5.observe(nextElement1);
        }
      });
    });
  
    observer4.observe(nextElement4);
  
    const observer5 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer6.observe(nextElement2);
        }
      });
    });
  
    observer5.observe(nextElement5);
  
    const observer6 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer7.observe(nextElement3);
        }
      });
    });
  
    observer6.observe(nextElement6);

    const observer7 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer8.observe(nextElement4);
          }
        });
      });
    
      observer7.observe(nextElement7);

      const observer8 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer7.observe(nextElement5);
          }
        });
      });
    
      observer8.observe(nextElement6);

    const observer9 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            
          }
        });
      });
    
      observer9.observe(section);
    
  });
  