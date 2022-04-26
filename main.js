<<<<<<< HEAD


/*abre e fecha o menu quando clicado no hamburguer ou no X*/
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
    link.addEventListener('click', function () {//ao clicar em um item do menu..
        nav.classList.remove('show')/*vai ser procurado dentro da lista do nav as tags A e remove o SHOW para fechar o menu e ir direto para a opção selecionada*/
    })
}


/*///AS CONST FICAM FORA DAS FUNTION PORQUE SERÃO CHAMADAS DENTRO DO ADDEVENTLISTENER TODA VEZ QUE O SCROLL ESTIVER ATIVO, ASSIM O window.addEventListener PROCURA  SOMENTE AS FUNÇÕES E NÃO AS CONSTANTES/////*/

/*mudar o header da página colocando sombra quando der o SCROLL */
const header = document.querySelector("#header")//declara o header
const navHeight = header.offsetHeight /*pegar a altura do header que é um objeto que tem milhões de propriedades como o offsetHeight*/

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {/*na windows tem o scroll do eixo y(vertical) que é verificado se é maior ou igual que a navHeight (maior que a altura da navegação do header)*/
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}


/*TESTIMONIALS*/
const swiper = new Swiper('.swiper', {
    /*New Swiper funciona como querySlector e vai dentro do html buscar o .swiper que é uma class do htlm*/
    slidesPerView: 1,  /*revela um slide por vez*/
    pagination: { /*o New Swiper procura dentro do html a class swiper-pagination*/
        el: '.swiper-pagination'
    },
    mousewheel: true, /*muda os slides ao scrollar o mouse*/
    keyboard: true, /*muda os slides quando selecionar as setas*/
    breakpoints: {/*tem na documentação do swiper*/
        767: {/*quando a tela chegar a 767 (tablet) o carrosel passa a ter dois depoimentos mostrados na tela*/
            slidesPerView: 2, /*quantidade de depoimentos por tela*/
            setWrapperSize: true /*faz com que sempre tenha dois cards de depoimentos na tela*/
        }
    }
})

/*ANIMAÇÃO AO ROLAR A PAGINA - scrollReveal = mostra os elementos conforme for rolando a pagina*/
const scrollReveal = ScrollReveal({
    irigin: 'top',/*iniciará do topo da pagina*/
    distance: '30px',
    durantion: 500, /*a animação acontecerá em 700 milisegundos*/
    reset: true /*quando chegar no final da pagina e for voltar para o inicio, continuará com a animação*/
})

scrollReveal.reveal(/*scrollReveal vai procurar dentro do html as tags abaixo e .reveal vai revelar na pagina */
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #service .text, #service .card-service, 
    #testimonials .text, #testimonials .swiper-wrapper, 
    #contact .text, #contact .contact-whatsapp, #contact .links, #footer, .social-media`,
    { interval: 100 })

/*BOTÃO VOLTAR PARA O TOPO- SCROLL*/
const backToTopButton = document.querySelector('.back-to-top') /*declara a funcão backToTopButton e procura dentro do document.querySelector(htlm) a tag back-to-top*/

function backToTop() {/*declara a FUNCTION com tudo o que será usado somente nessa função e depois passa a funcção dentro de window.addEventListener  ASSIM É POSSIVEL AGRUPAR E PASSAR VARIAS FUNCÕES OU NO CASO DE UMA UNICA FUNCÃO USAR window.addEventListener('scroll', changeHeaderWhenScroll) por exemplo*/


    if (window.scrollY >= 750) {/*quando acontecer o scroll e a function for acionada... se a scrolagem passar do tamanho de 750, colocar o show no html e aparece o botão back*/
        backToTopButton.classList.add('show')
    } else {/*se não, retira o show e some com o botão back*/
        backToTopButton.classList.remove('show')
    }
}



/*MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA*/
const sections = document.querySelectorAll('main section[id]')/*declara a const setion, procura dentro do documento html, dentro da tag MAIN todos as SECTION que tenham a tag ID*/
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 /*window.pageYOffset (pega da janela o deslocamento Y) + window.innerHeight / 8 (pega todo o tamanho da janela e divide por 8 * 4, pega os 4 pedaços e soma ao delocamento window.pageYOffset)*/


    for (const section of sections) {//para cada seção de seções, comece a rodar a sequencia de códigos abaixo....
        const sectionTop = section.offsetTop/*...pega primeiro o topo da seção...*/
        const sectionHeight = section.offsetHeight/*...pega a altura da seção...*/
        const sectionId = section.getAttribute('id')
        /*...pega o ID da seção (por SECTION está referenciando a SECTION do html, pode pegar pela get.Attribute. ID é o nome do atributo que tem que pegar)*/

        const checkpointStart = checkpoint >= sectionTop/*quando o scrollar a pagina e o checkpoint passar (for maior ou estiver dentro da seção) do topo da seção*/
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight/*quando o checkpoint for menor/igual ao topo + altura da section*/

        if (checkpointStart && checkpointEnd) {
            /*se estiver entre o checkpointStart E checkpointEnd, está dentro do calculo da const  checkpointEnd = checkpoint <= sectionTop + sectionHeight*/
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')/*procura o href que tem a ver com a sectionId selecionada*/
                .classList.add('active')

        } else {/*quando ele estiver fora do checkpointStart && checkpointEnd, faz a proxima seção*/
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


=======
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

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
    #contact .text, #contact .contact-whatsapp, #contact .links, #footer, .social-media`,
    { interval: 100 }
)

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 750) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

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

window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})


>>>>>>> ecd43cfbb38063883f82aba8714ce85db65ba4d4
