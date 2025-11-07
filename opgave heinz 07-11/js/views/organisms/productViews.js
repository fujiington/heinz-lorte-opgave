import { price2Dkk } from "../../utils/index.js";
import { Button, Div, Form, Fragment, Heading, Image, Input, Link, Paragraph } from "../atoms/index.js"

export const ProductListView = (products, category) => {
    const element = Fragment()

    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product;
        // Use hash navigation for product links
        const linkBox = Link(`#/?category=${category}&product=${slug}`,'', 'block mb-4 p-4 border rounded flex justify-between');
        const imgCol = Div('pr-4');
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]');
        img.loading = 'lazy';
        imgCol.append(img);
        const infoCol = Div('flex-1 min-w-0');
        const h2 = Heading(name,2);
        const p = Paragraph();
        p.innerHTML = teaser;
        infoCol.append(h2, p);
        const priceCol = Div('shrink-0 w-[200px] text-right');
        const priceText = Paragraph('text-xl font-bold');
        priceText.textContent = price2Dkk(price);
        const stockTxt = Paragraph(stockClass);
        stockTxt.textContent = stockText;
        priceCol.append(priceText, stockTxt);
        linkBox.append(imgCol, infoCol, priceCol);
        element.append(linkBox);
    });
    return element

}

export const ProductDetailsView = (product) => {
    const { id, name, imageUrl, description, price } = product

    const element = Div('flex justify-between gap-4 p-4 border rounded-lg')

    const imageCol = Div('shrink-0 w-[300px]')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'w-[90%] flex-shrink-0 rounded')
    imageCol.append(img)

    const infoCol = Div('flex-1 min-w-0')
    const h3 = Heading(name,1,'font-bold mb-2')
    infoCol.append(h3)

    const p = Paragraph()
    p.innerHTML = description
    infoCol.append(p)

    const form = Form('POST')
    const productId = Input('productId','','hidden',id)
    const quantity = Input('quantity', '', 'number', 1)
    const button = Button('Læg i kurv', 'submit')

    form.append(productId,quantity,button)
    infoCol.append(form)

    const priceCol = Div('text-2xl')
    priceCol.innerHTML = price2Dkk(price)

    element.append(imageCol, infoCol, priceCol)
    return element
    
}