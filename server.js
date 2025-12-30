const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();

app.get("/image", async (req, res) => {
    const { img, text, bg } = req.query;

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1640, height: 664 });

    const url =
        `file://${path.join(__dirname, "template.html")}` +
        `?img=${encodeURIComponent(img || "")}` +
        `&text=${encodeURIComponent(text || "")}` +
        `&bg=${encodeURIComponent(bg || "")}`;

    await page.goto(url, { waitUntil: "networkidle0" });

    const buffer = await page.screenshot({ type: "png" });
    await browser.close();

    res.set("Content-Type", "image/png");
    res.send(buffer);
});

app.listen(3000, () => {
    console.log("Image API en http://localhost:3000/image");
});
