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


const products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
    },
    {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
    },
    {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
    },
    {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
    },
    {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
    }
];

const product_select = document.querySelector("#product");
    let numVisits = Number(window.localStorage.getItem("visits")) || 0;
    numVisits++;



function addProductOptions(){
    products.forEach(product => {
        let option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        
        product_select.appendChild(option);
    });
}
addProductOptions();