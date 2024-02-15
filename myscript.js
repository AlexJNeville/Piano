document.addEventListener("scroll", function() {
  var element = document.getElementById("element");
  var trigger = document.getElementById("trigger");
  var triggerPosition = trigger.getBoundingClientRect().top;
  var scrollPosition = window.innerHeight;

  if (triggerPosition < scrollPosition) {
    element.classList.add("visible");
    element.classList.remove("hidden");
  } else {
    element.classList.remove("visible");
    element.classList.add("hidden");
  }
});
