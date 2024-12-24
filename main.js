const ddBtns = document.querySelectorAll('.dd-btn');
const ddLists = document.querySelectorAll('.dd-list');

[...ddBtns].forEach(btn => {
    const ddContainer = btn.parentElement;

    btn.addEventListener('click', () => {
        ddContainer.querySelector('.dd-list').classList.remove('hidden');
        btn.style.borderRadius = '2rem 2rem 0 0';
        btn.querySelector('.dd-chevron').classList.add('rotated-90-ccw');
    });
});


document.addEventListener('click', e => {
    [...ddLists].forEach(list => {
        const ddContainer = list.parentElement;
        const assocBtn = ddContainer.querySelector('.dd-btn');

        if (!list.contains(e.target) && !assocBtn.contains(e.target)) {
            if (![...list.classList].some(cl => cl === 'hidden')) {
                list.classList.add('hidden');
                assocBtn.style.borderRadius = '2rem';
                assocBtn.querySelector('.dd-chevron').classList.remove('rotated-90-ccw');
            }
        }
    });
});