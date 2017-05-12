const prevButton = document.querySelector('button.previous');
const nextButton = document.querySelector('button.next');
const acceptButton = document.querySelector('button.accept');

const contentDivs = document.querySelectorAll('.content > div');

let currentIndex = 0;

function advanceContent() {
  // BAIL EARLY IF WE'RE AT THE END
  if (currentIndex == contentDivs.length - 1) {
    return;
  }

  prevButton.classList.add('active');

  contentDivs[currentIndex].classList.remove('active');
  currentIndex = currentIndex + 1;

  if (currentIndex == contentDivs.length - 1) {
    nextButton.classList.remove('active');
    acceptButton.classList.add('active');
  }

  contentDivs[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', advanceContent);

function retrogressContent() {
  // BAIL EARLY IF WE'RE AT THE BEGINNING
  if (currentIndex == 0) {
    return;
  }

  nextButton.classList.add('active');
  acceptButton.classList.remove('active');

  contentDivs[currentIndex].classList.remove('active');
  currentIndex = currentIndex - 1;

  if (currentIndex == 0) {
    prevButton.classList.remove('active');
  }

  contentDivs[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', retrogressContent);

acceptButton.addEventListener('click', () => {
  document.querySelector('#wizard').remove();
});
