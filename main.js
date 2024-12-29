import './js-utils/dropdown.js';
import './js-utils/addItem.js';
import './js-utils/recommender.js';

const modal = document.getElementById('add-item-modal');
const openModal = document.querySelector('.add-txt');
const closeModal = document.querySelector('.add-txt');

openModal.addEventListener('click', () => {
    modal.showModal();
});