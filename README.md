# CDN Peppitaj 🎨

Este proyecto es una **página CDN dinámica** alojada en **GitHub Pages** que genera una imagen visual combinando:

- 🖼 Imagen de fondo fija (`welcome.jpg`)
- ⭕ Imagen central recortada en forma circular (desde un enlace)
- 📝 Texto inferior dinámico (desde el enlace)

Ideal para:
- páginas de bienvenida
- embeds
- bots
- previews dinámicos
- perfiles

---

## 📐 Resolución
- **1640 x 664 px**
- Optimizado para banners y previews

---

## 📁 Estructura del proyecto

cdnpeppitaj/
│
├── index.html
├── welcome.jpg
└── README.md

yaml
Copiar código

---

## 🔗 Cómo usar

Usá el siguiente formato de enlace:

https://peppitajrecords-png.github.io/cdnpeppitaj/?img=URL_DE_LA_IMAGEN&text=TEXTO

yaml
Copiar código

### Parámetros disponibles

| Parámetro | Descripción |
|---------|-------------|
| `img` | URL de la imagen central (se recorta en círculo) |
| `text` | Texto que aparece en la parte inferior |

⚠️ El texto debe ir codificado en URL  
Ejemplo:  
`Bienvenido a mi perfil` → `Bienvenido%20a%20mi%20perfil`

---

## 🧪 Ejemplo real

https://peppitajrecords-png.github.io/cdnpeppitaj/?img=https://peppitaj.sirv.com/avatar.jpg&text=Bienvenido%20a%20mi%20perfil

yaml
Copiar código

---

## 🎨 Personalización rápida

- Cambiar fondo: reemplazá `welcome.jpg`
- Ajustar tamaño del círculo: modificar `.avatar`
- Cambiar fuente o color: editar `.text` en `index.html`

---

## 🚀 Hosting

Este proyecto usa **GitHub Pages**:
- Gratis
- Rápido
- Funciona como CDN

---

## ⚠️ Notas
- Algunas plataformas pueden bloquear hotlinking de imágenes externas
- Recomendado usar imágenes desde GitHub, Imgur o CDN abiertos

---

## 📄 Licencia
Uso libre para proyectos personales y creativos.
