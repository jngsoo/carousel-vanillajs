class Slide {
    constructor(img, tagName, tagColor, title, content, detail, href) {
        this.img = img
        this.tagName = tagName
        this.tagColor = tagColor
        this.title = title
        this.content = content
        this.detail = detail
        this.href = href
    }
    render() {
        return /*html*/`
        <li>
        <img class="carousel-image" src=${this.img}>
        <div class="article-container">
            <article class=carousel-article aria-hidden="true">
                <span style="background-color: ${this.tagColor};">${this.tagName}</span>
                <h1>${this.title}</h1>
                <p>${this.content}</p>
                <a class="anchor" href=${this.href} target="_blank">${this.detail}</a>
            </article>
        </div>
        </li>
        `  
    }
}

export default Slide