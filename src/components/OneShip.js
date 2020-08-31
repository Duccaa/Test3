
export const oneShip = (ship) => {
    const shipDiv = document.createElement('div')
    shipDiv.innerHTML = `<a href="https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/vessel:AMERICAN%20CHAMPION"><img src=${ship.image}></a><p>Ship name: ${ship.ship_name}</p><p>Type: ${ship.ship_type}</p><p>Active: ${ship.active}</p>`
    return shipDiv
}
