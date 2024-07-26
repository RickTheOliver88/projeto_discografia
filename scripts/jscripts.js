// Declarações de variáveis
const nav = document.querySelector('nav')
const anchors = document.querySelectorAll('nav ul li a')
const links = document.querySelectorAll('td a')
const tds = document.querySelectorAll('td')
const icon = document.querySelectorAll('div.youtube-play-icon img')
const objBotao = document.querySelector('button')
const img = objBotao.querySelector('img')
const urlYoutube = [
    "https://youtube.com/playlist?list=PL8YH4mOwWryUO4kxV36tPqkiaAr4_oJe5&si=gF6eK1hvk8AujozE",
    "https://www.youtube.com/watch?v=Z-48u_uWMHY",
    "https://www.youtube.com/watch?v=hRK7PVJFbS8",
    "https://youtube.com/playlist?list=PLrbUxSl4nExNkwtsO8J-1PsN86RxvrPrT&si=QsNMqBa7vmYAxMSK",
    "https://www.youtube.com/watch?v=tvTRZJ-4EyI",
    "https://youtu.be/J87pJrxvJ5E?si=12VEQCdkQH-EyYyP",
    "https://youtube.com/playlist?list=PLjB_8hSS2lEMY-ap4zdPv0-mbTwxtN7KW&si=xjkmIOsb7Hw887uq",
    "https://youtu.be/zI383uEwA6Q?si=RNL94SGEtNAD-IsB",
    "https://youtu.be/toEW7_-pvOY?si=STNtSTUSY-DFrxWk"
]
const urlSpotify = [
    "https://open.spotify.com/intl-pt/album/7ycBtnsMtyVbbwTfJwRjSP?si=qwh7xIyYTxa7quoprm4RKQ",
    "https://open.spotify.com/intl-pt/track/3iVcZ5G6tvkXZkZKlMpIUs?si=719bc9ba923d41d3",
    "https://open.spotify.com/intl-pt/track/0N3W5peJUQtI4eyR6GJT5O?si=7af7d9d610854ebb",
    "https://open.spotify.com/intl-pt/album/4eLPsYPBmXABThSJ821sqY?si=k3IKkzF6RF2THB5IoUD7zQ",
    "https://open.spotify.com/intl-pt/track/7KXjTSCq5nL1LoYtL7XAwS?si=4e2482fd460a49f2",
    "https://open.spotify.com/intl-pt/track/6IZvVAP7VPPnsGX6bvgkqg?si=7216173e232b4252",
    "https://open.spotify.com/intl-pt/album/79ONNoS4M9tfIA1mYLBYVX?si=118P7DuuRhWc6bY2ipDhTg",
    "https://open.spotify.com/intl-pt/track/0fX4oNGBWO3dSGUZcVdVV2?si=ea78e214d11b4c99",
    "https://open.spotify.com/intl-pt/track/28qA8y1sz0FTuSapsCxNOG?si=2dea533c4e834d86"
]

// Eventos
objBotao.addEventListener('click', funMudaPlataforma)
window.addEventListener('load', ajustarScrollParaNavFixa);

// Declarações de funções
function ajustarScrollParaNavFixa() {
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            const navHeight = nav.offsetHeight;
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

function funMudaPlataforma(event) {
    event.preventDefault()

    if (img.getAttribute('src') === "./imagens/spotify_icon.png") {

        links.forEach((link, index) => {
            link.setAttribute('href', urlSpotify[index])
        })
        img.setAttribute('src', "./imagens/youtube_play_icon.png")

        tds.forEach(td => {
            if (td.classList.contains('youtube')) {
                td.classList.remove('youtube')
                td.classList.add('spotify')
            }
        })

        links.forEach(link => {
            const div = link.querySelector('div')
            const imgInDiv = div.querySelector('img')
            if (div.classList.contains('youtube-play-icon')) {
                div.classList.remove('youtube-play-icon')
                div.classList.add('spotify-icon')
                imgInDiv.setAttribute('src', './imagens/spotify_icon.png')
            }
        })
    } else {
        links.forEach((link, index) => {
            link.setAttribute('href', urlYoutube[index])
        })
        img.setAttribute('src', "./imagens/spotify_icon.png")

        tds.forEach(td => {
            if (td.classList.contains('spotify')) {
                td.classList.remove('spotify')
                td.classList.add('youtube')
            }
        })

        links.forEach(link => {
            const div = link.querySelector('div')
            const imgInDiv = div.querySelector('img')
            if (div.classList.contains('spotify-icon')) {
                div.classList.remove('spotify-icon')
                div.classList.add('youtube-play-icon')
                imgInDiv.setAttribute('src', './imagens/youtube_play_icon.png')
            }
        })
    }
}
