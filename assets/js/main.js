/* FETCH JOKES API */
const jokesList = document.getElementById('jokes-list')
const URL = 'https://v2.jokeapi.dev/joke/Programming?lang=es&amount=6'
const getJokes = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => showJokes(data.jokes))
}
getJokes()

function showJokes(jokes) {
    jokes.forEach(joke => {
        let article = document.createElement('article')
        article.classList.add('card__article')
        article.classList.add('swiper-slide')

        if(joke.type === 'twopart') {
            article.innerHTML = `
                <div class="card__data">
                    <h3 class="card__name">Joke ${joke.id}</h3>
                    <p class="card__description">
                        ${joke.setup} <br>
                        ${joke.delivery}
                    </p>
                </div>
            `
        }
        else {
            article.innerHTML = `
                <div class="card__data">
                    <h3 class="card__name">Joke ${joke.id}</h3>
                    <p class="card__description">
                        ${joke.joke}
                    </p>
                </div>
            `
        }

        jokesList.append(article)
    })
}

/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //Cuando hacemos click en cualquier nav__link, removemos la clase show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ADD BLUR HEADER */
const blurHeader = () => {
    const header = document.getElementById('header')
    //Añade una clase si el desplazamiento hacía abajo es mayor que 50
    this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //Cuando el scroll es mayor que 350 agrega la clase show-scroll o la remueve
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* SWIPER SLIDE */
let swiper = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    //Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        }
    }
});