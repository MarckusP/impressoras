import puppeteer from "puppeteer"




// export function processarDados({ modelo, departamento, ipaddress }) {
//     // Aqui você pode fazer o processamento necessário com os dados
//     console.log(`Dados recebidos: Modelo: ${modelo}, Departamento: ${departamento}, IP: ${ipaddress}`);

//     // Chame a função para mostrar as informações na página
//     mostrarInformacoes(modelo, departamento, ipaddress);
// }








function espacoEmBranco(str) {
    let name = str.replace(/(\t)+/g, "");
    //console.log(name);
    name = name.replace(/( )+/g, "");
    name = name.replace(/(\n)+/g, " ")
    name = name.replace(/( )+/g, "\n")
    //console.log(name);
    return name;
}

function idPages(str) {

    // Encontrando total de paginas
    let inicio = str.indexOf("PageTotal");
    let final = str.indexOf("Duplex");
    let totalPage = str.slice(inicio + 12, final - 1);

    //Encontrando Duplex
    inicio = str.indexOf("DuplexTotalPage");
    let duplex = str.slice(inicio + 16);

    return { totalPage, duplex };
}

function idmachine(str) {

    let inicio = str.indexOf("FirmwareVersion");
    let final = str.indexOf("EngineFWVersion");
    let firmware = str.slice(inicio + 18, final - 1);

    inicio = str.indexOf("MachineID");
    final = str.indexOf("FaxCard");
    let idprinter = str.slice(inicio + 12, final - 1);


    return { firmware, idprinter };
}

// console.log(sharedata)
//let bolean name = document.querySelector(".resposta");
(async () => {
    // Define a opção para ignorar os erros de certificado SSL
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true, headless: "new", headless: false
    });

    let n, name;

    const page = await browser.newPage();

    await page.goto('https://192.168.0.103/main.asp?Lang=en-us');
    n = await page.$("[class='toner']")
    name = await (await n.getProperty('width')).jsonValue();
    console.log(`Total tonner: ${name}`);



    await page.goto('https://192.168.0.103/counter.asp?Lang=en-us');
    n = await page.$("[class='rightMargin']")
    name = await (await n.getProperty('textContent')).jsonValue();
    let formatado = espacoEmBranco(name);

    let { totalPage, duplex } = idPages(formatado);
    console.log(`\nTotal de paginas impressas: ${totalPage}`);
    console.log(`\nTotal em duplex: ${duplex}`);

    await page.goto('https://192.168.0.103/machinei.asp?Lang=en-us');
    n = await page.$("[class='sCategory']")
    name = await (await n.getProperty('textContent')).jsonValue();
    formatado = espacoEmBranco(name);
    let { firmware, idprinter } = idmachine(formatado);
    console.log(`Versão do firmware: ${firmware}`);
    console.log(`\nNúmero de série: ${idprinter}`);

    //await page.screenshot({ path: 'maquina.png'});
  
    

    await browser.close();
})
();