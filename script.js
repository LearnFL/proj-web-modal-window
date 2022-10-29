'use strict';

// Selectros
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal
btnsOpenModal.forEach((showModalButton, index) => {
  showModalButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    modal[index].classList.remove('hidden');
  });
});

// Close on X
btnsCloseModal.forEach((closeModalButton, index) => {
  closeModalButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal[index].classList.add('hidden');
  });
});

// Close when click outside modal
overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  modal.forEach(element => {
    element.classList.add('hidden');
  });
});

// Close on Escape. If statement is not necessary but it avoids running code if modal is not open.
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.forEach(element => {
      if (!element.classList.contains('hidden')) {
        overlay.classList.add('hidden');
        element.classList.add('hidden');
      }
    });
  }
});
