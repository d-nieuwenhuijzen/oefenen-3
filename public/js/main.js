const containerCard = document.querySelector('.container-card');

fetch('/icecreams')
.then(myData => myData.text())
.then(jsonData => showIcecreams(jsonData));

function showIcecreams(icecreams) {
    console.log(icecreams);
    let htmlCode = '';
    for (let i = 0; i < icecreams.length; i++) {
        const icecream = icecreams[i];
        htmlCode += icecreamCard(icecream);
    }
    containerCard.innerHTML += htmlCode;
}

function icecreamCard(icecreams) {
    card = `
            <div class="card">
            <div class="card-body">
            <h4 class="card-title">${icecreams.icecream}</h4>
            <p class="card-text">${icecreams.description}</p>
            <p class="card-text">${icecreams.price}</p>
            </div>
        </div>
    `
}