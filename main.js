const ddBtn = document.querySelector('.dd-btn');
const ddList = document.querySelector('.dd-list');

ddBtn.addEventListener('click', () => {
    ddList.classList.remove('hidden');
});

document.addEventListener('click', e => {
    [...document.querySelectorAll('.dd-list')].forEach(el => {
        if (!el.contains(e.target) && !ddBtn.contains(e.target)) {
            if (![...el.classList].some(cl => cl === 'hidden')) {el.classList.add('hidden');}
        }
    });
});