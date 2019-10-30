const cheerio = require('cheerio');
const request = require('request-promise');

async function init(){
    //const $ - contains all html
    const $ = await request({
        uri: 'https://www.larebajavirtual.com/contenido/ver/tipo/grupo/contenido/7432?utm_source=interno&utm_medium=lrv_home&utm_campaign=lrv_oral_14_al_27_oct_boton_desktop_20191011',
        transform: body => cheerio.load(body)
    });
    //Getting tag title of the tag head
    const title = $('title');
    console.log(title.html());

    //Get the first div with a class called "content-txt2". The method find search another tag inside the div found
    const productName = $('div.content-txt2').find('div.content_product').find('a').find('div.descripcion-lineal');
    console.log(productName.html());

    //Getting all product names per page
    const allProducts = $('div.content-txt2 div.content_product div.descripcion-lineal').each((i, el) => {
        console.log(i, $(el).html().trim())
    })
}

init()