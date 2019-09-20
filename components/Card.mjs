class Card {
    constructor(img, title, carousel, color) {
        this.img = img
        this.title = title
        this.carousel = carousel
        this.color = color
    }
    /**
     * 
     * @param carousel JSON in Array format
     */
    generateDots(carousel) {
        let result = ''
        for(let i=0; i<carousel.length; i++) {
            result += `<span class="dot"></span>`
        }
        return result
    }
    render() {
        const dots = this.generateDots(this.carousel)
        return /*html*/`
        <div class="card" style="background-color: ${this.color};">
            <img src=${this.img}>
            <h3>${this.title}</h3>
            <span>
                ${dots}
            </span>
        </div>
        `  
    }
}

export default Card