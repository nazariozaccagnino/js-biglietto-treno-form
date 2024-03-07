let elFullName = document.getElementById('fullNameInput');
let elKm = document.getElementById('kmInput');
// console.log(elKm)
let elAge = document.getElementById('ageInput');
// console.log(elAge)
let elGenerate = document.getElementById('btnGenerate');
let elRefresh = document.getElementById('btnrefresh')
let elFinalTicket = document.getElementById('finalticket');
const pricePerKm = 0.21
// console.log(price, 'prezzointero');

elGenerate.addEventListener('click', function () {
    let fullName = elFullName.value
    let km = elKm.value
    let age = elAge.value
    let price = km * pricePerKm
    let wagon = Math.floor((Math.random() * 10) + 1);
    let seat = Math.floor((Math.random() * 4) + 1);
    let ticketNumber = Math.floor((Math.random() * 99999) + 1);
    let finalprice = ''
    elFinalTicket.classList.remove ('d-none');

    if (age <= 17) {
        finalprice = price - ((price * 20) / 100);
        console.log(finalprice, 'prezzo20');
        document.getElementById('ticketType').innerHTML = 'Biglietto under 20'
    }
    else if (age >= 65) {
        finalprice = price - ((price * 40) / 100);
        console.log(finalprice, 'prezzo40');
        document.getElementById('ticketType').innerHTML = 'Biglietto over 65'
    }
    else {
        finalprice = price
        console.log(finalprice, 'intero')
        document.getElementById('ticketType').innerHTML = 'Biglietto intero'
    }
    document.getElementById('outputprice').innerHTML = finalprice.toPrecision(4) + '€';
    document.getElementById('fullName').innerHTML = fullName;
    document.getElementById('wagon').innerHTML = wagon;
    document.getElementById('seat').innerHTML = seat;
    document.getElementById('ticketNumber').innerHTML = ticketNumber;
})

elRefresh.addEventListener('click', function () {
    location.reload();
})
