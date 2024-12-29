import './js-utils/dropdown.js';

const modal = document.getElementById('add-item-modal');
const openModal = document.querySelector('.add-txt');
const closeModal = document.querySelector('.add-txt');

modal.close();

openModal.addEventListener('click', () => {
    modal.showModal();
});



