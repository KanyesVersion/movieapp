document.querySelector('.add-item-btn').addEventListener('click', () => {
    const titles = ['The Wild Robot', 'Hannah Montana', 'Never say Never', 'Tinkerbell'];
    const item = document.createElement('div');
    item.classList.add('list-item');
    item.innerHTML = `
        <img src="./assets/BCS.jpg" alt="" class="item-img"> 
        <h3>${titles[Math.floor(Math.random()*titles.length)]}</h3>
        <div class="item-separator"></div>
        <p>2015</p>
        <div class="item-separator"></div>
        <p>Crime/Drama</p>
        <div class="item-separator"></div>
        <p>Series</p>
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
});