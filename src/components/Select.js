export const  selectList = () => {
   const selectDiv = document.createElement('div')
   selectDiv.id = 'select-div'
   const select = document.createElement('select')
   const option1 = document.createElement('option')
   option1.textContent = 'All ships'
   const option2 = document.createElement('option')
   option2.textContent = 'Active'
   const option3 = document.createElement('option')
   option3.textContent = ' Not active'
   select.append(option1, option2, option3)   
   selectDiv.appendChild(select)
   return selectDiv
}