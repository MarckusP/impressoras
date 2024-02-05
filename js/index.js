// import { processarDados } from "./base.js";

// let departamento, impressoraIP, modelo;



const button = document.getElementById('enviar');
const loadingButton = () => {

    button.innerHTML = '<img src="./img/Loading.png" class="loading"></img>';
}
const loadingButtonRemove = () => {
    button.innerHTML = 'Cadastrar';
}

const importarForm = (event) => {
    console.log("oi")
    event.preventDefault();
    loadingButton();

    // alert("Voce está aqui");
    let modelo = document.getElementById('idmodel').value
    let departamento = document.getElementById('iddepartamento').value
    let impressoraIP = document.getElementById('idaddress').value
    console.log(modelo, departamento, impressoraIP)

    mostrarInformacoes();




    loadingButtonRemove();

}

function mostrarInformacoes() {
    let tonner, pages, duplex, firmawre, serialNumber, empresa;

    empresa = "Departamento: Compras"
    tonner = "Tonner: 75%"
    pages = "Total de paginas: 1000"
    duplex = "Duplex: não existe"
    firmawre = "Firmawre: V2.05"
    serialNumber = "ID: 656584687"

    CreatPrint(empresa, tonner, pages, duplex, firmawre, serialNumber);
}


function CreatPrint(empresa, tonner, pages, duplex, firmawre, serialNumber) {

    let back = document.createElement("div")
    back.className = "Impressoras"

    let image = document.createElement("img")
    image.src = "./img/ricoh.png";

    let ul = document.createElement("ul")
    ul.className = "info-List"

    let text = document.createTextNode(empresa)
    let li1 = document.createElement("li")
    li1.appendChild(text)
    ul.appendChild(li1)

    text = document.createTextNode(tonner)
    let li2 = document.createElement("li")
    li2.appendChild(text)
    ul.appendChild(li2)

    text = document.createTextNode(pages)
    let li3 = document.createElement("li")
    li3.appendChild(text)
    ul.appendChild(li3)

    text = document.createTextNode(duplex)
    let li4 = document.createElement("li")
    li4.appendChild(text)
    ul.appendChild(li4)

    text = document.createTextNode(firmawre)
    let li5 = document.createElement("li")
    li5.appendChild(text)
    ul.appendChild(li5)

    text = document.createTextNode(serialNumber)
    let li6 = document.createElement("li")
    li6.appendChild(text)
    ul.appendChild(li6)

    back.appendChild(image);
    back.appendChild(ul)
    let bodycad = document.getElementById("Organizer");
    bodycad.appendChild(back)
}

document.getElementById('enviar').addEventListener('click', importarForm);

