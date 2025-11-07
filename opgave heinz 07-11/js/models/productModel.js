import { request } from "../services/fetch.js"

/**
 * @param {string} category - Kategoriens slug (fx "mad" eller "vand-og-vandrensning")
 */
export const getList = async (category) => {
    const url = `http://localhost:4000/api/products/${category}`

    const data = await request(url)

    return data
}

/**
 * @param {string} product - Produktets ID
 */
export const getDetails = async (product) => {
    const url = `http://localhost:4000/api/products/byId/${product}`

    const data = await request(url)

    return data
}