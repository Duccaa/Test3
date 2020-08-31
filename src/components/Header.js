
export const header = (compnay) => {
    const headerDiv = document.createElement('div')
    headerDiv.id = 'header'
    headerDiv.innerHTML = `<h1>${compnay.name}</h1><p>Founder: ${compnay.founder}</p><p>Founded: ${compnay.founded}</p>`
    return headerDiv
}