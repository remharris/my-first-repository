let elements = [
  document.querySelector('#component-one'),
  document.querySelector('#component-two'),
  document.querySelector('#component-three'),
];

elements.forEach((el, index) => {
  const button = el.querySelector('button');

  button.addEventListener('click', (event) => {
    elements[index].classList.toggle('active');
    elements[(index + 1) % elements.length].classList.toggle('active');
  });
});
