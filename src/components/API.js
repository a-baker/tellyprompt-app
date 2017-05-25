// Fake API responses for front-end dev

const episodes = [
    { href: '1396/5/14', img: 's9QORY5rrwzQpTCTgNdBRyKehtL', desc: 'Breaking Bad S5E14: Ozymandias' },
    { href: '1399/6/9', img: 'qb302fko45T0TvgsFa12IbSiq2P', desc: 'Game of Thrones S6E9: Battle of the Bastards' },
    { href: '1399/6/5', img: 'rqPtGylElBAud1BBZpyOq7MQ6Ak', desc: 'Game of Thrones S6E5: The Door' },
    { href: '38472/1/9', img: 'rjRBAIoTWrbHbtBhBsLNtEzcz6J', desc: 'Marvel\'s Jessica Jones S1E9: AKA Sin Bin' },
    { href: '1399/6/10', img: 'm8vzoOKnjzFG8M5iprtweQEQzrW', desc: 'Game of Thrones S6E10: The Winds of Winter' },
]

const MAX_LATENCY = 0;

function fakeDelay() { 
    return Math.floor(Math.random() * MAX_LATENCY);
}

function getEpisodes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(episodes);
        }, fakeDelay());
    });
}

export { getEpisodes };