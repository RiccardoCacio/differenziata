window.onload = function () {


    let todayDate = document.getElementById('todayDate');
    let dailyTrash = document.getElementById('dailyTrash');
    let body = document.querySelector('body');
    let tomorrowTrash = document.getElementById('tomorrowTrash');
    let tomorrowTrashBox = document.getElementById('tomorrowTrashBox');
    let letteralTodayDate = document.getElementById('letteralTodayDate');

    //date
    let date = new Date();
    let day = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];
    let numberDay = date.getDay();
    let letteralDay = day[numberDay];
    let createTodayDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();



    //todayDate content
    todayDate.innerHTML = createTodayDate;
    letteralTodayDate.innerHTML = letteralDay;


    //Domenica-Null
    if (letteralDay === 'Domenica') {
        dailyTrash.innerHTML = 'Niente raccolta di rifiuti per oggi'
        body.style.backgroundColor = '#D3D3D3'
        tomorrowTrash.innerHTML = 'Domani: Raccolta organico'
        tomorrowTrashBox.style.backgroundColor = '#ad7239'
    }



    //Lunedi-Organico
    if (letteralDay === 'Lunedi') {
        dailyTrash.innerHTML = 'Raccolta Organico'
        body.style.backgroundColor = '#ad7239'
        tomorrowTrash.innerHTML = 'Domani: Raccolta vetro*'
        tomorrowTrashBox.style.backgroundColor = '#31cc79'
    }


    //Martedi-Vetro
    if (letteralDay === 'Martedi') {
        dailyTrash.innerHTML = 'Raccolta Vetro'
        let alert = document.createElement('p');
        alert.textContent = '*Il vetro verrà raccolto una volta ogni due settimane'
        alert.setAttribute('id', 'vetroAlert')
        dailyTrash.appendChild(alert)
        body.style.backgroundColor = '#31cc79'
        tomorrowTrash.innerHTML = 'Domani: Raccolta Plastica&Metalli'
        tomorrowTrashBox.style.backgroundColor = '#fccd49'
    }

    //Mercoledi-Plastica&Metalli
    if (letteralDay === 'Mercoledi') {
        dailyTrash.innerHTML = 'Raccolta Plastica&Metalli'
        body.style.backgroundColor = '#fccd49'
        tomorrowTrash.innerHTML = 'Domani: Raccolta Indifferenziato'
        tomorrowTrashBox.style.backgroundColor = '#c9c7c7'
    }

    //Giovedi-Indifferenziato

    if (letteralDay === 'Giovedi') {
        dailyTrash.innerHTML = 'Raccolta Indifferenziato'
        body.style.backgroundColor = '#c9c7c7'
        tomorrowTrash.innerHTML = 'Domani: Raccolta Organico'
        tomorrowTrashBox.style.backgroundColor = '#ad7239'
    }

    //Venerdi-Organico
    if (letteralDay === 'Venerdi') {
        dailyTrash.innerHTML = 'Raccolta Organico'
        body.style.backgroundColor = '#ad7239'
        tomorrowTrash.innerHTML = 'Domani: Carta&Cartone'
        tomorrowTrashBox.style.backgroundColor = '#0793fa'
    }


    //Sabato-Carta&Cartone
    if (letteralDay === 'Sabato') {
        dailyTrash.innerHTML = 'Raccolta Carta&Cartone'
        body.style.backgroundColor = '#0793fa'
        tomorrowTrash.innerHTML = 'Domani: Niente raccolta di rifiuti'
        tomorrowTrashBox.style.backgroundColor = '#D3D3D3'
    }















}