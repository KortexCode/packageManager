const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=5&limit=10";

const main = async() => {
    const response = await fetch(API);
    const data = await response.json();

    const output = data?.map((product)=>{
        return `
            <article class="Card">
                <img src="${product.images[0]}" alt="${product.title}">
                <h2>
                    ${product.title} <small>Precio $ ${product.price}</small>
                </h2>
            </article>`
    }).join("");

    let $section = document.createElement("section");
    $section.classList.add("items");
    $section.innerHTML = output;
    $app.appendChild($section);

}

main();