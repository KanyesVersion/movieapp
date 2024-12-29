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

const mediaArr = [
    wildRobot,
    bCS,
    sousou,
    lotr,
    laLaLand,
    peterPan,
    tinkerbellNever,
    fullMetalBH,
    orfanato
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

    return mediaArr.filter(el => 
        el.genres.some(genre => grs.includes(genre)) &&
        compareDuration(el.duration) &&
        compareMovie(el.movie) &&
        compareLive(el.live)
    );
}

console.log(pick(['Thriller'], 4, 1, 2));