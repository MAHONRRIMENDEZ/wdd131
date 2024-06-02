const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function getCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

function getLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes().toString().padStart(2, '0')}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}
getCurrentYear();
getLastModifiedDate();

const temples = [
{
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "1983, December, 2",
    area: 35500,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/e012ebb4075dc7976a314471fc0a3b3058e37c1a/full/320%2C/0/default"
},
{
    templeName: "Sonora Mexico Mexico",
    location: "Sonora, Mexico",
    dedicated: "2010, February, 27",
    area: 10769,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/cba0fa28d0682caa31b2f24e506b4261fb000883/full/320%2C/0/default"
},
{
    templeName: "Bogota Colombia",
    location: "Bogota, Colombia",
    dedicated: "1999, April, 26",
    area: 53500,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/89b209718a7ed41649a497893e240972b7cfd036/full/320%2C/0/default"
},

];

document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("imagenes-templo");

    function createTempleCard(temples) {
    contenido.innerHTML = ''; 
    temples.forEach(temple => {
        let figure = document.createElement("figure");
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        contenido.appendChild(figure);
    });
    }

    function filterTemples(criteria) {
    let filteredTemples = temples;
    switch (criteria) {
        case 'Old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1990 );
        
        break;
        case 'New':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
        case 'Large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
        case 'Small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
        case 'Home':
        default:
        filteredTemples = temples;
        break;
    }
    createTempleCard(filteredTemples);
    }

    function filterTemples(criteria) {
    let filteredTemples = temples;
    switch (criteria) {
        case 'Old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1990);
        break;
        case 'New':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
        case 'Large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
        case 'Small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
    }
    createTempleCard(filteredTemples);
    }



    createTempleCard(temples);

    
    document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const criteria = event.target.title;
        filterTemples(criteria);
    });
    });
});