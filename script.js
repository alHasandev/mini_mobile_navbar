const closeButton = document.querySelector('span.right #close');
const footerTexts = document.querySelectorAll('.nav-footer span.text');
const navItems = document.querySelectorAll('.nav-item');
const navTexts = document.querySelectorAll('.nav-item span');

closeButton.addEventListener('click', e => {
  footerTexts.forEach(element => {
    // console.log(element);
    element.classList.toggle('none');
  });
  navTexts.forEach(element => {
    // console.log(element);
    element.classList.toggle('none');
  })
});