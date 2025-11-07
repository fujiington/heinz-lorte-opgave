import { Button, Div } from "../atoms/index.js"

export const cookieBannerView = () => {
    const overlay = Div('fixed hidden inset-0 z-[9998] bg-black/70 flex items-end md:items-center md:justify-center')
    overlay.id = 'cookie-overlay'
    overlay.setAttribute('aria-hidden', 'false')

    const banner = Div('w-full md:max-w-[720px] bg-[#111] text-white p-4 md:rounded-xl shadow-2xl md:m-6')
    banner.id = 'cookie-banner'
    banner.role = 'dialog'
    banner.setAttribute('aria-model', 'true')
    banner.setAttribute('aria-live', 'polite')
    banner.tabIndex = -1

    const wrap = Div('flex flex-col md:flex-row md:items-center md:justify-between gap-4')
    const text = Div('text-sm md:text-base')
    text.innerText = "Vi bruger cookies til statistik og marketing. Du kan vælge nødvendige eller acceptere alle."

    const btns = Div('flex gap-2')

    const acceptAll = Button('Accepter alle', 'button', 'px-3 py-2 bg-[#4CAF50] text-[#666] rounded-md font-semibold')
    acceptAll.id = 'cookie-acceptall'

    const acceptSome = Button('Kun nødvendige', 'button', 'px-3 py-2 bg-[#222] border-[#666] text-white rounded-md font-semibold')
    acceptSome.id = 'cookie-acceptsome'

    btns.append(acceptAll, acceptSome)

    wrap.append(text,btns)
    banner.append(wrap)
    overlay.append(banner)

    return overlay 
}