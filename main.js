// let selectedGenre = null;
// const hero = document.getElementById('hero');
// [...hero.querySelectorAll('a')].forEach(link => {
//     link.addEventListener('click', () => {
//         selectedGenre = link.dataset.value;
//         console.log(selectedGenre);
//     });
// });

if (document.querySelector('.recommender-container')) {
    import('./js-utils/recommender.js');
}
if (document.querySelector('.dropdown')) {
    import('./js-utils/dropdown.js');
}

if (document.querySelector('.list-container')) {
    import('./js-utils/addItem.js');
}

if (document.querySelector('.custom-radio')) {
    import('./js-utils/customRadio.js');
}