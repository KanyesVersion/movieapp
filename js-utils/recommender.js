class MediaInfo {
    constructor(id, title, genres, duration, live, movie) {
        this.id = id;
        this.title = title;
        this.genres = genres;
        this.duration = duration;
        this.live = live;
        this.movie = movie;
    }
}

const wildRobot = new MediaInfo(0, 'The Wild Robot', ['Adventure', 'Sci-Fi', 'Fantasy'], 102, false, true);
const bCS = new MediaInfo(1, 'Better Call Saul', ['Crime', 'Drama'], 45, true, false);
const sousou = new MediaInfo(2, 'Sousou no Frieren', ['Fantasy', 'Adventure'], 23, false, false);
const lotr = new MediaInfo(3, 'The Lord of the Rings', ['Fantasy', 'Adventure'], 200, true, true);
const laLaLand = new MediaInfo(4, 'La La Land', ['Comedy', 'Romance', 'Drama'], 128, true, true);
const peterPan = new MediaInfo(5, 'Peter Pan', ['Fantasy', 'Children'], 76, false, true);
const tinkerbellNever = new MediaInfo(6, 'Tinker Bell and the Legend of the Neverbeast', ['Fantasy', 'Children'], 76, false, true);
const fullMetalBH = new MediaInfo(7, 'Fullmetal Alchemist: Brotherhood', ['Fantasy', 'Action', 'Adventure'], 23, false, false);
const orfanato = new MediaInfo(8, 'El Orfanato', ['Horror', 'Drama', 'Thriller'], 105, true, true);
const flow = new MediaInfo(9, 'Flow', ['Adventure', 'Fantasy'], 84, false, true);
const isleDogs = new MediaInfo(10, 'Isle of dogs', ['Sci-Fi', 'Comedy'], 101, false, true);
const returnCats = new MediaInfo(11, 'The cats return', ['Adventure', 'Comedy'], 75, false, true);
const bobCat = new MediaInfo(12, 'A street cat named Bob', ['Family', 'Comedy'], 103, true, true);
const mcu = new MediaInfo(13, 'Infinity Saga', ['Superhero', 'Action'], 130, true, true);
const marryMax = new MediaInfo(14, 'Marry and Max', ['Comedy', 'Drama'], 94, false, true);
const aristocats = new MediaInfo(15, 'The Aristocats', ['Comedy', 'Family'], 78, false, true);
const manOtto = new MediaInfo(16, 'A man called Otto', ['Comedy', 'Drama'], 126, true, true);
const countryOldMen = new MediaInfo(17, 'No country for old men', ['Thriller', 'Western'], 122, true, true);
const fargo = new MediaInfo(18, 'Fargo', ['Crime', 'Comedy'], 98, true, true);
const zathura = new MediaInfo(19, 'Zathura: A Space Adventure', ['Family', 'Adventure'], 101, true, true);
const mrNobody = new MediaInfo(20, 'Mr. Nobody', ['Sci-Fi', 'Fantasy'], 78, true, true);
const donnieDarko = new MediaInfo(21, 'Donnie Darko', ['Sci-Fi', 'Thriller'], 113, true, true);
const midsommar = new MediaInfo(22, 'Midsommar', ['Horror', 'Mistery'], 148, true, true);
const paprika = new MediaInfo(23, 'Paprika', ['Thriller', 'Sci-Fi'], 90, false, true);
const perfectBlue = new MediaInfo(24, 'Perfect Blue', ['Horror', 'Mystery'], 81, false, true);
const summerDays = new MediaInfo(25, '500 days of summer', ['Comedy', 'Romance'], 95, true, true);
const dark = new MediaInfo(26, 'Dark', ['Thriller'], 51, true, false);
const ghibli = new MediaInfo(27, 'Ghibli', ['Fantasy', 'Family', 'Adventure', ''], 95, false, true);
const princeEgypt = new MediaInfo(28, 'The prince of Egypt', ['Family', 'Musical'], 100, false, true);
const camino = new MediaInfo(29, 'El Camino', ['Thriller', 'Crime'], 140, true, true);
const ladyTramp = new MediaInfo(30, 'Lady and the Tramp', ['Family', 'Romance'], 76, false, true);
const goodPlace = new MediaInfo(30, 'The good place', ['Fantasy', 'Comedy'], 25, true, false);

const mediaArr = [
    wildRobot,
    bCS,
    sousou,
    lotr,
    laLaLand,
    peterPan,
    tinkerbellNever,
    fullMetalBH,
    orfanato,
    flow,
    isleDogs,
    returnCats,
    bobCat,
    mcu,
    marryMax,
    aristocats,
    manOtto,
    countryOldMen,
    fargo,
    zathura,
    mrNobody,
    donnieDarko,
    midsommar,
    paprika,
    perfectBlue,
    summerDays,
    dark,
    ghibli,
    princeEgypt,
    camino,
    ladyTramp,
    goodPlace
];

function pick(grs, dur, mov, liv) {
    // dur is 0: < 30 min, 1: < 1 hour, 2: 1-2 hours, 3: 2-3 hours, 4: idc
    function compareDuration(durat) {
        switch (dur) {
            case 0:
                return durat < 30;
            case 1:
                return durat < 60;
            case 2:
                return durat >= 60 && durat < 120;
            case 3:
                return durat >= 120 && durat < 180;
            case 4:
                return true;
            default:
                return true;
        }
    }
    // mov is 0: a movie, 1: a series, 2: whatever
    function compareMovie(movC) {
        if (mov === 2) {
            return true;
        } else {
            return mov === 0 ? movC : !movC;
        }
    }
    // liv is 0: a live-action, 1: animated, 2: whatever
    function compareLive(livC) {
        if (liv === 2) {
            return true;
        } else {
            return liv === 0 ? livC : !livC;
        }
    }

    function compareGenres(grsC) {
        return grs.includes('whatever') ? true : grsC.some(genre => grs.includes(genre.toLowerCase().replace('-', '')));
    } 

    return mediaArr.filter(el => 
        compareGenres(el.genres)
        && compareDuration(el.duration)
        && compareMovie(el.movie) 
        && compareLive(el.live)
    );
}

const recommendBtn = document.getElementById('recom-accept-btn');
const recomMatchModal = document.getElementById('recom-match-modal');

recommendBtn.addEventListener('click', () => {
    // pick winner media
    const selectedOptions = {
        genres: document.getElementById('recom-genres-dd').dataset.value.split(','),
        duration: document.getElementById('recom-duration-dd').dataset.value,
        movieOrSeries: [...document.querySelectorAll('[name="recom-mov"]')].find(option => option.getAttribute('aria-checked') === 'true').dataset.value,
        liveOrAnimated: [...document.querySelectorAll('[name="recom-liv"]')].find(option => option.getAttribute('aria-checked') === 'true').dataset.value,
    }
    
    const fittingMedia = pick(selectedOptions.genres, parseInt(selectedOptions.duration), parseInt(selectedOptions.movieOrSeries), parseInt(selectedOptions.liveOrAnimated));
    const randomMedia = fittingMedia[Math.floor(Math.random() * fittingMedia.length)];

    // Open modal with information
    recomMatchModal.showModal();
    document.getElementById('recom-match-title').textContent = randomMedia.title;
});