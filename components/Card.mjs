class Card {
    constructor(img, title, carousel) {
        this.img = img
        this.title = title
        this.carousel = carousel
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
        <div class="card">
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