import { request } from "../services/fetch.js"

const url = `http://localhost:4000/api/cart`

/**
 * @returns Array
 */
export const getCartList = async () => {
    try {
        const data = await request(url)
        if(data) {
            return data
        }
    } catch (error) {
        console.error(`Fejl i kald af indkøbskurv model liste: ${error}`)        
    }
}


/**
 * @param {Number} productId 
 * @param {Number} quantity 
 * @returns Boolean
 */
export const addToCart = async (productId, quantity) => {
    console.log({productId}, {quantity});
    
    try {
        const data = await request(url, 'POST', {
          productId, quantity  
        })
        return data
    } catch (error) {
        console.error(`Fejl i cart model addToCart: ${error}`);
                
    }
}

/**
 * @param {Number} id 
 */
export const removeFromCart = async id => {
    try {
        const data = await request(`${url}/${id}`, 'DELETE')
        if(data.message) {
            location.reload()
        }
    } catch (error) {
        console.error(error);
    }
}