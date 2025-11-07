import { cookieBanner } from "../../controllers/cookieBannerController.js"
import { Div, Heading, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

export const HeaderView = () => {
    const element = document.createElement('header')
    element.className = 'bg-slate-700 p-4 text-white flex justify-between'
    const h1 = Heading('Sgt. Prepper')
    element.append(h1)

    const p = Paragraph()
    // Use hash-only navigation so the browser doesn't try to request /index.htm
    const a = Link('#/login', 'Login', 'block bg-slate-400 px-3 py-2 rounded-lg border border-slate-800')
    p.append(a)
    element.append(p)

    const cart = Paragraph()
    const cartLink = Link('#/cart', 'Se kurv')
    cart.append(cartLink)
    element.append(cart)

    return element
}

export const NavBarView = arrNavItems => {
    const element = document.createElement('nav')
    element.className = 'bg-sky-950'
    const ul = Ul('flex')

    arrNavItems.forEach(item => {
        const { url, title } = item // Destructure assignment - udskiller egenskaber fra objekt

        const li = Li()
        const item1 = Link(url, title, `block p-4 ${item.textColor}`)
        li.append(item1)
        ul.append(li)
    })

    element.append(ul)
    return element
}

export const MainView = (title, content) => {
    const element = document.createElement('main')
    element.className = "p-4 min-h-60 container m-auto flex-grow"
    const h1 = Heading(title)
    element.append(h1, content)
    element.append(cookieBanner())
    return element
}

export const FooterView = () => {
    const element = document.createElement('footer')
    element.className = "mt-auto h-[168px] p-4 bg-[url(./images/footer-bg.svg)] bg-center bg-no-repeat"
    return element
}

export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div('mb-4')
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)    
    element.append(label, input)
    return element
}
