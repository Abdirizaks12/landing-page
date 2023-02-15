toggler = document.querySelector('.nav-toggler');

toggler.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};
