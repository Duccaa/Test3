import {getCompanyInfo, getAllShips} from './sorurces'
import {header} from './components/Header'
import {shipList} from './components/ShipList'
import {selectList} from './components/Select'
const app = document.getElementById('app')

getCompanyInfo()
    .then(res => {
        console.log(res.data)
        app.append(header(res.data))

        app.append(selectList()) 
    })

getAllShips()
    .then(res => {
        console.log(res.data)
        app.append(shipList(res.data))
    })

selectList().addEventListener('change', () => {
    const select = document.getElementById('select')
    const shipListDiv = document.getElementById('ship-list')
    shipListDiv.innerHTML = ''

    if(select.value === 'All ships') {  
        getAllShips()
            .then(res => {
                app.append(shipList(res.data))
            })
    }
    else if(select.value ==='Active') {
        getAllShips()
            .then(res => {
                app.append(shipList(res.data.filter(ship => ship.active == true)))
            })
    }
    else if(select.value === 'Not active') {
        getAllShips()
            .then(res => {
                app.append(shipList(res.data.filter(ship => ship.active == false)))
            })
    }
})