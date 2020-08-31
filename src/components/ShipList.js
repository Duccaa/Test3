import {oneShip} from './OneShip'

export const shipList = (ships) => {
    const shipListDiv = document.createElement('div')
    shipListDiv.id = 'ship-list'
    ships.forEach(ship => {
        shipListDiv.append(oneShip(ship))
        
    });
    return shipListDiv
}
