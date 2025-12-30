const puppeteer = require('puppeteer');
const fs = require('fs');

// Recibe parámetros desde la línea de comandos
const args = process.argv.slice(2);
const params = {};
args.forEach(arg => {
    const [key, value] = arg.split('=');
    params[key] = value;
});

if (!params.img || !params.text) {
    console.log("Uso: node generateCDN.js img=URL_IMG text='Tu texto'");
    process.exit(1);
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // URL de tu página con parámetros
    const cdnPage = `https://peppitajrecords-png.github.io/cdnpeppitaj/?img=${encodeURIComponent(params.img)}&text=${encodeURIComponent(params.text)}`;

    await page.goto(cdnPage, {waitUntil: 'networkidle0'});

    // Seteamos tamaño exacto del banner
    await page.setViewport({width: 1640, height: 664});

    // Tomamos screenshot
    const fileName = `cdn_${Date.now()}.png`;
    await page.screenshot({path: fileName});
    console.log(`Imagen generada: ${fileName}`);

    await browser.close();
})();
