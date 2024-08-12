// Declarações de variáveis
const links = document.querySelectorAll('td a');
const tds = document.querySelectorAll('td');
const icon = document.querySelectorAll('div.youtube-play-icon img');
const objBotao = document.querySelector('button');
const img = objBotao.querySelector('img');
const urlYoutube = [
    "https://youtube.com/playlist?list=PL8YH4mOwWryUO4kxV36tPqkiaAr4_oJe5&si=gF6eK1hvk8AujozE",
    "https://youtu.be/l9fN-8NjrvI?si=SBwC3VEekqtZ8v_U",
    "https://www.youtube.com/watch?v=Z-48u_uWMHY",
    "https://www.youtube.com/watch?v=hRK7PVJFbS8",
    "https://youtube.com/playlist?list=PLrbUxSl4nExNkwtsO8J-1PsN86RxvrPrT&si=QsNMqBa7vmYAxMSK",
    "https://youtu.be/jdbQYDkNjfk?si=FDBxOuCS98i4aEya",
    "https://www.youtube.com/watch?v=tvTRZJ-4EyI",
    "https://youtu.be/J87pJrxvJ5E?si=12VEQCdkQH-EyYyP",
    "https://youtube.com/playlist?list=PLjB_8hSS2lEMY-ap4zdPv0-mbTwxtN7KW&si=xjkmIOsb7Hw887uq",
    "https://youtu.be/6nTcdw7bVdc?si=97KTTrQ1klQA0izw",
    "https://youtu.be/zI383uEwA6Q?si=RNL94SGEtNAD-IsB",
    "https://youtu.be/toEW7_-pvOY?si=STNtSTUSY-DFrxWk"
];
const urlSpotify = [
    "https://open.spotify.com/intl-pt/album/7ycBtnsMtyVbbwTfJwRjSP?si=qwh7xIyYTxa7quoprm4RKQ",
    "https://open.spotify.com/intl-pt/track/7Ks4VCY1wFebnOdJrM13t6?si=6e728ac77c1d4d26",
    "https://open.spotify.com/intl-pt/track/3iVcZ5G6tvkXZkZKlMpIUs?si=719bc9ba923d41d3",
    "https://open.spotify.com/intl-pt/track/0N3W5peJUQtI4eyR6GJT5O?si=7af7d9d610854ebb",
    "https://open.spotify.com/intl-pt/album/4eLPsYPBmXABThSJ821sqY?si=k3IKkzF6RF2THB5IoUD7zQ",
    "https://open.spotify.com/intl-pt/track/23luOrEVHMfoX0AhfbQuS6?si=2af5527eab04476c",
    "https://open.spotify.com/intl-pt/track/7KXjTSCq5nL1LoYtL7XAwS?si=4e2482fd460a49f2",
    "https://open.spotify.com/intl-pt/track/6IZvVAP7VPPnsGX6bvgkqg?si=7216173e232b4252",
    "https://open.spotify.com/intl-pt/album/79ONNoS4M9tfIA1mYLBYVX?si=118P7DuuRhWc6bY2ipDhTg",
    "https://open.spotify.com/intl-pt/track/6BU1RZexmvJcBjgagVVt3M?si=e35217243faf4cb1",
    "https://open.spotify.com/intl-pt/track/0fX4oNGBWO3dSGUZcVdVV2?si=ea78e214d11b4c99",
    "https://open.spotify.com/intl-pt/track/28qA8y1sz0FTuSapsCxNOG?si=2dea533c4e834d86"
];

// Eventos
objBotao.addEventListener('click', funMudaPlataforma);

function funMudaPlataforma(event) {
    event.preventDefault();

    if (img.getAttribute('src') === "./imagens/spotify_icon.png") {

        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('href', urlSpotify[i]);
        }
        img.setAttribute('src', "./imagens/youtube_play_icon.png");

        for (var i = 0; i < tds.length; i++) {
            if (tds[i].classList.contains('youtube')) {
                tds[i].classList.remove('youtube');
                tds[i].classList.add('spotify');
            }
        }

        for (var i = 0; i < links.length; i++) {
            var div = links[i].querySelector('div');
            var imgInDiv = div.querySelector('img');
            if (div.classList.contains('youtube-play-icon')) {
                div.classList.remove('youtube-play-icon');
                div.classList.add('spotify-icon');
                imgInDiv.setAttribute('src', './imagens/spotify_icon.png');
            }
        }
    } else {
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute('href', urlYoutube[i]);
        }
        img.setAttribute('src', "./imagens/spotify_icon.png");

        for (var i = 0; i < tds.length; i++) {
            if (tds[i].classList.contains('spotify')) {
                tds[i].classList.remove('spotify');
                tds[i].classList.add('youtube');
            }
        }

        for (var i = 0; i < links.length; i++) {
            var div = links[i].querySelector('div');
            var imgInDiv = div.querySelector('img');
            if (div.classList.contains('spotify-icon')) {
                div.classList.remove('spotify-icon');
                div.classList.add('youtube-play-icon');
                imgInDiv.setAttribute('src', './imagens/youtube_play_icon.png');
            }
        }
    }
}
