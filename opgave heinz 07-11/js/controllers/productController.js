import { addToCart } from "../models/cartModel.js";
import { getDetails, getList } from "../models/productModel.js";
import { isLoggedIn } from "../services/auth.js";
import { ProductDetailsView, ProductListView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = async () => {
    isLoggedIn();
    const { category = 'vand-og-vandrensning', product } = Object.fromEntries(new URLSearchParams(location.search));
    let html = '';
    if (!product) {
        html = await ProductList();
    } else {
        html = await ProductDetails(product);
    }
    return html;
}

export const ProductList = async () => {
    const { category = 'vand-og-vandrensning' } = Object.fromEntries(new URLSearchParams(location.search));
    const data = await getList(category);
    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? 'På lager' : 'Forventes på lager indenfor få uger',
        stockClass: item.stock ? 'text-green-600' : 'text-red-600'
    }));
    const html = ProductListView(formattedProducts, category);
    const layout = await Layout('Produkter', html);
    // Attach click events to product links
    html.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            location.hash = `/?category=${category}&product=${link.href.split('product=')[1]}`;
        });
    });
    return layout;
}

export const ProductDetails = async (product) => {
    const data = await getDetails(product);
    const html = ProductDetailsView(data);
    const form = html.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            handleAddToCart(e);
        });
    }
    const layout = await Layout('', html);
    return layout;
}

export const handleAddToCart = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    const productId = form.productId.value
    const quantity = form.quantity.value

    if(quantity && productId) {
        const data = await addToCart(productId, quantity)
    }    

}