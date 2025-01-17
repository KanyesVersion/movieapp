const addItemModal = document.getElementById('add-item-modal');
const placeholder = document.querySelector('.empty-placeholder');

document.getElementById('add-close-btn').addEventListener('click', () => {
    const conditions = [
        [...document.querySelectorAll('[name="modal-liv"]')].some(el => el.getAttribute('aria-checked') === 'true')
        && [...document.querySelectorAll('[name="modal-mov"]')].some(el => el.getAttribute('aria-checked') === 'true')
        && [...document.getElementById('modal-genres-dd').querySelectorAll('input')].some(el => el.checked)
        && document.getElementById('title-input').value.length
        && document.getElementById('hour-input').value.length
        && document.getElementById('minute-input').value.length
    ]

    if (conditions.every(i => i)) {
        const title = document.getElementById('title-input').value;
        const genres = document.getElementById('modal-genres-dd').dataset.value;
        const hours = document.getElementById('hour-input').value;
        const minutes = document.getElementById('minute-input').value;
        const liveOrAnimated = [...document.querySelectorAll('[name="modal-liv"]')].find(option => option.getAttribute('aria-checked') === 'true').dataset.value;
        const movieOrSeries = [...document.querySelectorAll('[name="modal-mov"]')].find(option => option.getAttribute('aria-checked') === 'true').dataset.value;
        const item = document.createElement('div');
        item.classList.add('list-item');
        // Study the genres logic 
        item.innerHTML = `
            <img src="../assets/BCS.jpg" alt="" class="item-img"> 
            <h3>${title}</h3>
            <div class="item-separator"></div>
            <p>${genres.split(',').map(el => el.charAt(0).toUpperCase()+el.slice(1)).map(el => el.replace('Scifi','Sci-Fi')).join(' / ')}</p>
            <div class="item-separator"></div>
            <p>${hours}:${minutes}</p>
            <div class="item-separator"></div>
            <p>${liveOrAnimated}</p>
            <div class="item-separator"></div>
            <p>${movieOrSeries}</p>
            <div class="item-separator"></div>
            <div class="rating">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span>
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
                <input type="hidden" id="rating-value" value="0">
            </div>
            <div class="item-separator"></div>
            <button class="watched-btn">
                <i class="fa fa-circle-o" aria-hidden="true"></i>
            </button>
        `;
        document.querySelector('.list-container').appendChild(item);
        placeholder.style.display = 'none';
        addItemModal.close();
    }
});

placeholder.addEventListener('click', () => {
    addItemModal.showModal();
});

addItemModal.querySelector('.close-modal-btn').addEventListener('click', () => {
    addItemModal.close();
});
