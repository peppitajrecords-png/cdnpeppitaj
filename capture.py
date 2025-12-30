from playwright.sync_api import sync_playwright
import sys
import os

url = sys.argv[1]  # URL del HTML con parámetros
output = sys.argv[2] if len(sys.argv) > 2 else "output/image.png"

os.makedirs("output", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(
        viewport={"width": 1200, "height": 630}
    )

    page.goto(url)
    page.wait_for_timeout(1000)  # espera a que cargue JS

    page.screenshot(path=output)
    browser.close()

print(f"Imagen generada: {output}")
