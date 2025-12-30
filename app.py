from flask import Flask, request, send_file
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
import base64
from io import BytesIO

app = Flask(__name__)

@app.route("/image.png")
def image():
    img_url = request.args.get("img","")
    text = request.args.get("text","")
    bg = request.args.get("bg","welcome.jpg")

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1640,664")

    driver = webdriver.Chrome(options=chrome_options)
    html_file = f"file://{os.path.abspath('template.html')}?img={img_url}&text={text}&bg={bg}"
    driver.get(html_file)

    screenshot = driver.get_screenshot_as_png()
    driver.quit()

    return send_file(BytesIO(screenshot), mimetype='image/png')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
