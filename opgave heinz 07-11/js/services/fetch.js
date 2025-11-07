import { getToken } from "./auth.js"

export const request = async (url, method = 'GET', body = {}) => {

    if (!url) throw new Error('Missing url')

    const token = getToken()
    const hasBody = body !== undefined && body !== null && method !== 'GET'

    const options = {
        method, 
        headers: {
            'Accept': 'application/json',        
            'Content-type': 'application/json',  
            ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
        },
        ...(hasBody ? { body: JSON.stringify(body) } : {})
    }

    try {
        const response = await fetch(url, options)

        const result = await response.json()

        return result
    } catch (error) {
        console.error(error)
    }
}