//========== Show menu ============//
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('toggle-button'),
        navClose = document.getElementById('nav-close')

//Nav close//
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//Menu hidden//
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//==============Remove menu mobile============//
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav-link, we remove  the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))

//============= ADD BLUR HEADER =============//
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50  ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// ============= EMAIL JS =========== //
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_2fc4kmm','template_txkrf1d','#contact-form','G8c8uxHjDE_RMLlci')
    .then (() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout (() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset ()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
// const scrollUp = () => {
//     const scroll = document.getElementById('scroll-up')

//     this.scrollY >= 350 ? scroll.classList.add('show-scroll')
//                         : scroll.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

const scrollUp = () => {
const scrollup = document.getElementById('scrollup')

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']' )
              
              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }
              else {
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    // reset: true // animation repeat
})
sr.reveal(`.home_data, .experience, .skills, .contact_container`)
sr.reveal(`.home_img`, {delay: 600})
sr.reveal(`.home_scroll`)
sr.reveal(`.work_card, .services_card`, {interval: 100})
sr.reveal(`.about_content`, {origin: 'right'})
sr.reveal(`.about_img`, {origin: 'left'})
