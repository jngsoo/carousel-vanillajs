const json = require('./carousel.json')
const sql = require('../sql')

sql.query(`CREATE TABLE IF NOT EXISTS cards_data (
    img VARCHAR(200),
    title VARCHAR(200),
    category_color VARCHAR(200),
    carousel VARCHAR(200)
);`)


let INDEX = 0


console.log(json[INDEX].carousel.length)

json[INDEX].carousel.forEach(carousel => {
    sql.query(`CREATE TABLE IF NOT EXISTS ${json[INDEX].title.toLowerCase()} (
        img VARCHAR(200),
        category_name VARCHAR(200),
        category_color VARCHAR(200),
        title VARCHAR(200),
        content VARCHAR(200),
        detail_comment VARCHAR(200),
        detail_href VARCHAR(200)
    );`)
    sql.query(`
    INSERT INTO ${json[INDEX].title.toLowerCase()}
    VALUES 
    ('${carousel.img}', '${carousel.category_name}', '${carousel['category-color']}', '${carousel.title}', '${carousel.content}', '${carousel.detail_comment}', '${carousel.detail_href}')
    `)
    INDEX++

});

