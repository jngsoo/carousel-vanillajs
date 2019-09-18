class Card {
    constructor(img, title, carousel) {
        this.img = img
        this.title = title
        this.carousel = carousel
    }
    render() {
        return /*html*/`
        <div class="card">
            <img src=${this.img}>
            <h3>${this.title}</h3>
        </div>
        `  
    }
}

export default Card