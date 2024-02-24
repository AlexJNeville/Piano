const boxes = document.querySelectorAll('.grid-container');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((grid-container, idx) => {
    const boxTop = grid-container.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      grid-container.classList.add('show');
    } else {
      grid-container.classList.remove('show');
    }
  });
}
