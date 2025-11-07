import { price2Dkk } from "../../utils/index.js"
import { Button, Div, Li, Ul } from "../atoms/index.js"

export const cartListView = (data = []) => {
    const element = Ul()

    

    data.forEach(item => {
        const li = Li('flex gap-3 py-1 justify-between')

        const quantity = Div('w-[10%]')
        quantity.innerText = item.quantity
        li.append(quantity)

        const name = Div('w-[60%]')
        name.innerText = item.product.name
        li.append(name)

        const price = Div('text-right w-[20%]')
        price.innerText = price2Dkk(item.product.price)
        li.append(price)

        const action = Div('text-right w-[10%]')
        const delBtn = Button('Slet', 'button')
        delBtn.dataset.cartid = item.id
        action.append(delBtn)
        li.append(action)
        

        element.append(li)
    })
    
    return element
}

export const cartListHeaderView = arrColumns => {
    const cartHeader = Div('flex gap-3 border-b border-black py-1 justify-between')

    arrColumns.forEach(item => {
        const col = Div(item.className)
        col.textContent = item.name
        cartHeader.append(col)
    })

    return cartHeader
}

export const cartTotalView = totalPrice => {
    const totalRow = Div('flex gap-3 border-b border-t py-1 justify-between')

    const textCol = Div('w-[70%] font-bold')
    textCol.innerText = 'Total'

    const totalCol = Div('w-[20%] text-right')
    totalCol.innerText = price2Dkk(totalPrice)

    const spacerCol = Div('w-[10%]')

    totalRow.append(textCol, totalCol, spacerCol)

    return totalRow
}