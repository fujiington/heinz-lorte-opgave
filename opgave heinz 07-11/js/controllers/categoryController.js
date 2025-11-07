import { getList } from "../models/categoryModel.js"

export const getCategoryList = async () => {
    const url = new URL(window.location.href)

    const curCategory = url.searchParams.get('category') || 'vand-og-vandrensning'

    const data = await getList()

    // Use hash-based query so the browser does not request /index.htm from the server.
    // Router will strip the query string and route to '/'.
    const formattedCategories = data.map(item => ({
        slug: item.slug,
        title: item.title,
        url: `#/?category=${item.slug}`,
        textColor: curCategory === item.slug
            ? 'text-yellow-500'
            : 'text-white'
    }))
    return formattedCategories
}
