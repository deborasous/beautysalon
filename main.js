const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


/*quando clicar em um item do menu, fechar todo o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*mudar o header da página colocando sombra quando der o SCROLL */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


/*TESTIMONIALS*/
const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/*ANIMAÇÃO AO ROLAR A PAGINA - scrollReveal = mostra os elementos conforme for rolando a pagina*/
const scrollReveal = ScrollReveal({
    irigin: 'top',
    distance: '30px',
    durantion: 500,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #service .text, #service .card-service, 
    #testimonials .text, #testimonials .swiper-wrapper, 
    #contact .text, #contact .contact-whatsapp, #contact .links, #footer, .social-media`, {
        interval: 100
    })

/*BOTÃO VOLTAR PARA O TOPO- SCROLL*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if (window.scrollY >= 750) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}



/*MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}


/*QUANDO SCROLL*/
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})