from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from gradio_client import Client, file as gr_file
from PIL import Image, ImageOps
from fastapi import Form

import shutil
import uuid
import os
from pillow_heif import register_heif_opener 
register_heif_opener()

MAIN_SERVER = "i9d7g2rzu0mhlx"
ALT_SERVER = "wlsm2bnymufalx"
DEV_SERVER = "https://relation-minnesota-identical-directions.trycloudflare.com"


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://0.0.0.0:3000", 
        "http://localhost:4009",
        "http://0.0.0.0:4009", 
        "http://fittingroom.tech",
        "http://fittingroom.tech:3000",
        "http://78.46.104.134:30086",  # Add your NodePort frontend URL
        "http://78.46.104.134:30090",  # Add your NodePort backend URL
        "http://195.26.233.61:54412",  # Add your GPU server if needed
        f"https://{MAIN_SERVER}-7860.proxy.runpod.net/",
        f"https://{ALT_SERVER}-7860.proxy.runpod.net/",
        DEV_SERVER,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_DIR = os.path.join(BASE_DIR, "uploads")
RESULT_DIR = os.path.join(BASE_DIR, "results")

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(RESULT_DIR, exist_ok=True)

# client = Client("steppykim/IDM-VTON")
#def prepare_image(path, size=(384, 512)):

    # img = Image.open(path)
    # img = ImageOps.exif_transpose(img).convert("RGB")
    # img = ImageOps.fit(img, size, Image.LANCZOS)
    # img.save(path, format="JPEG") 
    # img.save(path)

#to conver images with other extenstions -- should cover .HEIF and others
def prepare_image(path):
    img = Image.open(path)
    img = ImageOps.exif_transpose(img).convert("RGB")
    # img = ImageOps.fit(img, size, Image.LANCZOS)

    jpg_path = path.rsplit(".", 1)[0] + ".jpg"
    img.save(jpg_path, format="JPEG")
    return jpg_path
from fastapi.responses import JSONResponse

@app.post("/api/preview-heic")
async def preview_heic(file: UploadFile = File(...)):
    try:
        heic_path = os.path.join(UPLOAD_DIR, f"preview_{uuid.uuid4().hex}.heic")
        with open(heic_path, "wb") as f:
            shutil.copyfileobj(file.file, f)

        jpg_path = prepare_image(heic_path)

        return JSONResponse(content={"preview": f"/results/{os.path.basename(jpg_path)}"})
    except Exception as e:
        print(" HEIC conversion failed:", str(e))
        return JSONResponse(content={"error": "HEIC conversion failed"}, status_code=500)
@app.post("/api/tryon")
async def tryon(person: UploadFile = File(...), cloth: UploadFile = File(...), garment_des: str = Form("shirt")):
    # production server
    client = Client(f"https://{MAIN_SERVER}-7860.proxy.runpod.net/")
    # dev server
    #client = Client(DEV_SERVER)


    # 2. Define converted JPEG paths
    person_path = os.path.join(UPLOAD_DIR, f"person_{uuid.uuid4().hex}.jpg")
    cloth_path = os.path.join(UPLOAD_DIR, f"cloth_{uuid.uuid4().hex}.jpg")

    with open(person_path, "wb") as f:
        shutil.copyfileobj(person.file, f)

    with open(cloth_path, "wb") as f:
        shutil.copyfileobj(cloth.file, f)

    person_path =prepare_image(person_path)
    cloth_path =prepare_image(cloth_path)

    result = client.predict(
        dict={"background": gr_file(person_path), "layers": [], "composite": None},
        garm_img=gr_file(cloth_path),
        garment_des=garment_des,
        is_checked=True,
        is_checked_crop=False,
        denoise_steps=35,
        seed=42,
        api_name="/tryon"
    )
    #save image locally
    result_image_path = os.path.join(RESULT_DIR, f"result_{uuid.uuid4().hex}.png")
    Image.open(result[0]).save(result_image_path)

    #generated imaged path
    return {"output": f"/results/{os.path.basename(result_image_path)}"}


from fastapi.staticfiles import StaticFiles
app.mount("/results", StaticFiles(directory=RESULT_DIR), name="results")
