const theanimation = document.querySelectorAll('.grid-container');

const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Calculate top and bottom positions of the element relative to the viewport
      const topEdgeDistance = entry.boundingClientRect.top - entry.rootBounds.top;
      const bottomEdgeDistance = entry.rootBounds.bottom - entry.boundingClientRect.bottom;

      // Define the dead zone in pixels
      const deadZone = 5px; // 10 pixels for top and bottom dead zones

      // Check if the element is within the viewport but outside the dead zones
      if (
        entry.isIntersecting &&
        topEdgeDistance > deadZone &&
        bottomEdgeDistance > deadZone
      ) {
        entry.target.classList.add('grid-container-animation');
      } else {
        entry.target.classList.remove('grid-container-animation');
      }
    });
  },
  {
    threshold: 0.1
  }
);

theanimation.forEach((element) => {
  observer1.observe(element);
});

const the_animation = document.querySelectorAll('.grid-container-back')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('grid-container-back-animation')
        }
            else {
                entry.target.classList.remove('grid-container-animation')
            }
        
    })
},
   { threshold: 0.3
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
