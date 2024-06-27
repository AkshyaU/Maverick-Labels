const titles = document.querySelectorAll('.acc_title');

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const panel = title.nextElementSibling; // Get the corresponding panel for the clicked title

    // Close all panels
    titles.forEach((otherTitle) => {
      const otherPanel = otherTitle.nextElementSibling;
      if (otherPanel !== panel) {
        otherPanel.style.display = 'none';
        otherTitle.classList.remove('active');
      }
    });

    if (panel.style.display === 'block') {
      // If the panel is currently visible, hide it
      panel.style.display = 'none';
      title.classList.remove('active');
    } else {
      // If the panel is currently hidden, show it
      panel.style.display = 'block';
      title.classList.add('active');
    }
  });
});
// buy domed page
// active state
var active = document.querySelector('.label-shape:first-child');
active.classList.add('selected');

var shapes = document.querySelectorAll('.label-shape');

shapes.forEach(function (shape) {
  shape.addEventListener('click', function () {
    // Remove 'selected' class from all shapes
    shapes.forEach(function (a) {
      a.classList.remove('selected');
    });
    // Add 'selected' class to the clicked shape
    shape.classList.add('selected');
  });
});
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
