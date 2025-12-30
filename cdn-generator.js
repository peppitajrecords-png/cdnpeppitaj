const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const params = new URLSearchParams(window.location.search);
const avatarUrl = params.get("img");
const text = params.get("text") ? decodeURIComponent(params.get("text")) : "";

// Cargar imagen de fondo
const bgImage = new Image();
bgImage.src = "welcome.jpg"; // Cambia a tu imagen de fondo
bgImage.onload = () => {
    // Dibujar fondo
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    if (avatarUrl) {
        const avatar = new Image();
        avatar.crossOrigin = "anonymous"; // para poder exportar si viene de otro dominio
        avatar.src = avatarUrl;
        avatar.onload = () => {
            // Dibujar avatar circular en el centro
            const x = canvas.width / 2;
            const y = canvas.height / 2 - 40;
            const r = 130;

            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            ctx.drawImage(avatar, x - r, y - r, r * 2, r * 2);
            ctx.restore();

            drawText();
        };
    } else {
        drawText();
    }
};

function drawText() {
    if (!text) return;
    ctx.font = "42px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 8;

    ctx.fillText(text, canvas.width / 2, canvas.height - 30);
}

// Opcional: convertir a URL para usar como imagen CDN
// const imageDataURL = canvas.toDataURL("image/png");
// console.log(imageDataURL);
