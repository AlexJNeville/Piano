const theanimation = document.querySelectorAll('.grid-container')

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('grid-container-animation')
        }
            else {
                entry.target.classList.remove('grid-container-animation')
            }
        
    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < theanimation.length; i++) {
   const elements = theanimation[i];

    observer1.observe(elements);
  } 

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
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
