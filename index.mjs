const cards = [
    {   
        "img" : "https://img.icons8.com/cotton/64/000000/cardboard-box--v1.png",
        "title" : "Ship",
        "carousel" : [
            {
                "img" : "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE1",
                "content" : "hasdjfk",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            },
            {
                "img" : "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE2",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            },
            {
                "img" : "https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE3",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            }
        ]
    },
    {   
        "img" : "https://img.icons8.com/ios/50/000000/video.png",
        "title" : "Stream",
        "carousel" : [
            {
                "img" : "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE4",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            }
        ]
    },
    {   
        "img" : "https://img.icons8.com/wired/64/000000/shopping.png",
        "title" : "Shop",
        "carousel" : [         
            {
                "img" : "https://images.unsplash.com/photo-1556910101-a533e487de15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE4",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            }
        ]
    },
    {   
        "img" : "https://img.icons8.com/dotty/80/000000/reading-ebook.png",
        "title" : "Read",
        "carousel" : [         
            {
                "img" : "https://images.unsplash.com/photo-1568750603117-f26c65ac27c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE4",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            }
        ]
    },
    {   
        "img" : "https://img.icons8.com/pastel-glyph/64/000000/plus.png",
        "title" : "More",
        "carousel" : [         
            {
                "img" : "https://images.unsplash.com/photo-1533315318720-a6538dcefcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "category_name" : "PRIME ABCD EFG",
                "title" : "THIS IS TITLE4",
                "content" : "Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",
                "detail_comment" : "Learn more about Prime Rewards",
                "detail_href" : "http://www.google.com"
            }
        ]
    }
]

import Card from './components/Card.mjs'
import Slide from './components/Slide.mjs'

const $ = element => document.querySelector(element)
const $All = element => document.querySelectorAll(element)
let numOfSlides = 0

const cardContainer = $('.card-container')
const carouselContainer = $('.carousel-container')

cards.forEach(card => {
    cardContainer.insertAdjacentHTML('beforeend',new Card(card.img, card.title, card.carousel).render())
    card.carousel.forEach( slide => {

        let newSlide = new Slide(slide.img, 
            slide.category_name, 
            slide.title, 
            slide.content, 
            slide.detail_comment, 
            slide.detail_href)

        carouselContainer.insertAdjacentHTML('beforeend',newSlide.render())
        numOfSlides++
    })
})

const dots = $All('.dot')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const slide = $('.carousel-container')

let page = 0
let dotIndex = 0

const slideNext = () => {
    if(Math.abs(page) === numOfSlides-1) return;
    page -= 1;
    dots[dotIndex].className = 'dot'
    dotIndex++
    slide.style.transition = "300ms";
    slide.style.margin = `0rem 1rem 0rem ${page*100}%`
    dots[dotIndex].className = 'dot-selected'
    console.log(page)
}
const slidePrev = () => {
    if(Math.abs(page)===0) return;
    page += 1
    dots[dotIndex].className = 'dot'
    dotIndex--
    slide.style.transition = "300ms";
    slide.style.margin = `0rem 1rem 0rem ${page*100}%`
    dots[dotIndex].className = 'dot-selected'
    console.log(page)
}
const moveSlide = index => {
    page = -(index)
    dots[dotIndex].className = 'dot'
    slide.style.transition = "300ms";
    slide.style.margin = `0rem 1rem 0rem ${page*100}%`
    dotIndex = index
    dots[dotIndex].className = 'dot-selected'
    console.log(page)

}

nextBtn.addEventListener('click', slideNext)
prevBtn.addEventListener('click', slidePrev)
cardContainer.addEventListener('click', e => {
    if(e.target.tagName === "SPAN") {
        moveSlide(+e.target.id)
        console.log(page)
    }
    
})

// 방향키 입력에 따른 Carousel 전환
window.onkeyup = e => {
    if(e.key === "ArrowRight") slideNext()
    else if (e.key === "ArrowLeft") slidePrev()
}

(function init() {
    console.log(page)
    setInterval(slideNext,3000)
    dots[dotIndex].className = 'dot-selected'
})()




