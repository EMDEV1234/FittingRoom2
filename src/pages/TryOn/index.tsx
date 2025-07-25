import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./index.module.css";
import { runVTON } from "../../api/idmtryon";
import { GrUpload } from "react-icons/gr";
import { HorizontalScroll } from "../../components/HorizontalScroll/HorizontalScroll";
import scroll_00 from "../../assets/images/car_00.png";
import scroll_01 from "../../assets/images/car_01.png";
import scroll_02 from "../../assets/images/car_02.png";
import scroll_03 from "../../assets/images/car_03.png";
import scroll_04 from "../../assets/images/car_04.png";
import scroll_05 from "../../assets/images/car_05.png";
import scroll_06 from "../../assets/images/car_06.png";
import scroll_07 from "../../assets/images/car_07.png";
import scroll_08 from "../../assets/images/car_08.png";
import scroll_09 from "../../assets/images/car_09.png";

import exPerson1 from "../../assets/images/example_images/IMG_2463.jpg";
import exPerson2 from "../../assets/images/example_images/IMG_6340.JPG";
import exPerson3 from "../../assets/images/example_images/IMG_1654.jpeg";
import exPerson4 from "../../assets/images/example_images/IMG_7708.jpeg";
import exPerson5 from "../../assets/images/example_images/IMG_9340.jpg";

import exCloth1 from "../../assets/images/example_images/00005_00.jpg";
import exCloth2 from "../../assets/images/example_images/00006_00.jpg";
import exCloth3 from "../../assets/images/example_images/00007_00.jpg";
import exCloth4 from "../../assets/images/example_images/00008_00.jpg";
import exCloth5 from "../../assets/images/example_images/00009_00.jpg";
import heic2any from "heic2any";
import ExampleInputs from "../../components/ExampleInputs/ExampleInputs";
const TryOn: React.FC = () => {
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [clothImage, setClothImage] = useState<string | null>(null);
  const [personFile, setPersonFile] = useState<File | null>(null);
  const [clothFile, setClothFile] = useState<File | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const generateUUID = (): string =>
    Math.random().toString(36).substring(2, 10) + Date.now().toString(36);

  const images = [
    scroll_00,
    scroll_01,
    scroll_02,
    scroll_03,
    scroll_04,
    scroll_05,
    scroll_06,
    scroll_07,
    scroll_08,
    scroll_09,
  ].map((image) => ({
    id: generateUUID(),
    image,
  }));

  const convertAvifToJpeg = async (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            const jpegFile = new File(
              [blob],
              file.name.replace(/\.avif$/, ".jpg"),
              {
                type: "image/jpeg",
              }
            );
            resolve(jpegFile);
          } else {
            reject("Conversion failed");
          }
        }, "image/jpeg");
      };

      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };
  const uploadHeicForPreview = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/preview-heic", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.preview) {
        return `http://fittingroom.tech${data.preview}`;
      } else {
        console.error("Preview API error:", data);
        return null;
      }
    } catch (err) {
      console.error("HEIC preview failed:", err);
      return null;
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[], type: "person" | "cloth") => {
      const file = acceptedFiles[0];
      if (!file) return;

      const isHEIC = file.type === "image/heic" || file.name.endsWith(".heic");
      const isAVIF = file.type === "image/avif" || file.name.endsWith(".avif");

      let previewUrl: string;

      try {
        if (isHEIC) {
          try {
            const converted = await heic2any({
              blob: file,
              toType: "image/jpeg",
            });
            const blob = Array.isArray(converted) ? converted[0] : converted;

            const jpegFile = new File(
              [blob],
              file.name.replace(/\.heic$/i, ".jpg"),
              {
                type: "image/jpeg",
              }
            );

            previewUrl = URL.createObjectURL(jpegFile);

            // success
            if (type === "person") {
              setPersonImage(previewUrl);
              setPersonFile(jpegFile);
            } else {
              setClothImage(previewUrl);
              setClothFile(jpegFile);
            }
          } catch (heicErr) {
            console.warn("heic2any failed, using backend preview instead");

            const fallbackUrl = await uploadHeicForPreview(file);
            if (fallbackUrl) {
              if (type === "person") setPersonImage(fallbackUrl);
              else setClothImage(fallbackUrl);
            } else {
              alert("This .HEIC file could not be previewed.");
            }

            if (type === "person") setPersonFile(file);
            else setClothFile(file);
          }
          // const convertedBlob = await heic2any({
          //   blob: file,
          //   toType: "image/jpeg",
          // });

          // const jpegFile = new File(
          //   [convertedBlob as Blob],
          //   file.name.replace(/\.heic$/, ".jpg"),
          //   { type: "image/jpeg" }
          // );

          // previewUrl = URL.createObjectURL(jpegFile);

          // if (type === "person") {
          //   setPersonImage(previewUrl);
          //   setPersonFile(jpegFile);
          // } else {
          //   setClothImage(previewUrl);
          //   setClothFile(jpegFile);
          // }

          // return;
        }

        if (isAVIF) {
          const converted = await convertAvifToJpeg(file);

          // Clean old preview URL (important if same file is uploaded again)
          if (type === "person" && personImage)
            URL.revokeObjectURL(personImage);
          if (type === "cloth" && clothImage) URL.revokeObjectURL(clothImage);

          previewUrl = URL.createObjectURL(converted);

          if (type === "person") {
            setPersonImage(previewUrl);
            setPersonFile(converted);
          } else {
            setClothImage(previewUrl);
            setClothFile(converted);
          }

          return;
        }

        previewUrl = URL.createObjectURL(file);

        const testImg = new Image();
        testImg.onload = () => {
          if (type === "person") {
            setPersonImage(previewUrl);
            setPersonFile(file);
          } else {
            setClothImage(previewUrl);
            setClothFile(file);
          }
        };
        testImg.onerror = () => {
          // alert("This image format is not supported by your browser.");
          URL.revokeObjectURL(previewUrl);
        };
        testImg.src = previewUrl;
      } catch (err) {
        alert("Image conversion failed.");
        console.error(err);
      }
    },
    []
  );
  const personDropzone = useDropzone({
    onDrop: (files) => onDrop(files, "person"),
    accept: { "image/*": [] },
  });

  const clothDropzone = useDropzone({
    onDrop: (files) => onDrop(files, "cloth"),
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/avif": [],
      "image/heic": [],
      "image/*": [],
    },
  });

  const handleGenerate = async () => {
    if (!personFile || !clothFile) return;
    setLoading(true);
    setResultUrl(null);

    try {
      const output = await runVTON(personFile, clothFile, description);
      setResultUrl(output);
      console.log("try on result url:", output);
    } catch (error) {
      console.error("VTON API failed", error);
      alert("Try-on failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>THE WORLDS FIRST VIRTUAL DRESSING ROOM</h1>

      <div className={styles.dropzones}>
        <div className={styles.dropzoneContainer}>
          <label className={styles.label}>Person Image</label>
          <div {...personDropzone.getRootProps()} className={styles.dropzone}>
            <input {...personDropzone.getInputProps()} />
            {personImage ? (
              <div className={styles.previewWrapper}>
                <img
                  src={personImage}
                  alt="Person"
                  className={styles.personImageInput}
                />
                <button
                  className={styles.removeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPersonImage(null);
                    setPersonFile(null);
                  }}
                >
                  <FaRegTrashCan />
                </button>
              </div>
            ) : (
              <div className={styles.uploadSection}>
                <GrUpload size={45} />
                <p className={styles.uploadText}>
                  Upload <span className={styles.imageTextUpload}>your</span>{" "}
                  <br />
                  image here
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.dropzoneContainer}>
          <label className={styles.label}>Clothing Image</label>
          <div {...clothDropzone.getRootProps()} className={styles.dropzone}>
            <input {...clothDropzone.getInputProps()} />
            {clothImage ? (
              <div className={styles.previewWrapper}>
                <img
                  src={clothImage}
                  alt="Cloth"
                  className={styles.clothImageInput}
                />
                <button
                  className={styles.removeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setClothImage(null);
                    setClothFile(null);
                  }}
                >
                  <FaRegTrashCan />
                </button>
              </div>
            ) : (
              <div className={styles.uploadSection}>
                <GrUpload size={45} />
                <p className={styles.uploadText}>
                  Upload{" "}
                  <span className={styles.imageTextUpload}>clothing</span>{" "}
                  <br />
                  image here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <label htmlFor="description" className={styles.descriptionLabel}>
          Garment Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="e.g. White short sleeves shirt"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.descriptionInput}
        />
      </div>
      <div className={styles.exampleCarouselContainer}>
        <ExampleInputs
          images={[exPerson1, exPerson2, exPerson3, exPerson4, exPerson5]}
          label="Example Person Images"
        />
        <ExampleInputs
          images={[exCloth1, exCloth2, exCloth3, exCloth4, exCloth5]}
          label="Example Cloth Images"
        />
      </div>

      <button
        className={styles.generateButton}
        disabled={!personFile || !clothFile || loading}
        onClick={handleGenerate}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {resultUrl && (
        <div className={styles.resultWrapper}>
          <label className={styles.label}>Generated Try-On</label>
          <img
            src={resultUrl}
            alt="Try-on result"
            className={styles.resultImage}
          />
          <div className={styles.saveOptions}>
            <button
              className={styles.saveButton}
              onClick={() => {
                const existing = JSON.parse(
                  localStorage.getItem("savedFits") || "[]"
                );
                existing.push(resultUrl);
                localStorage.setItem("savedFits", JSON.stringify(existing));
                alert("Fit saved!");
              }}
            >
              Save Fit
            </button>
            <button
              className={styles.addFav}
              onClick={() => {
                if (!clothFile) return;

                const reader = new FileReader();
                reader.onloadend = () => {
                  const base64Image = reader.result as string;
                  const exists = JSON.parse(
                    localStorage.getItem("addFav") || "[]"
                  );
                  exists.push(base64Image);
                  localStorage.setItem("addFav", JSON.stringify(exists));
                  alert("Cloth added to favourites!");
                };
                reader.readAsDataURL(clothFile);
              }}
            >
              Save Garment
            </button>
          </div>
        </div>
      )}

      <div className={styles.carouselContainer}>
        <div className={styles.tagContainter}>
          <h2 className={styles.tagUs}>Tag us to be featured!</h2>
        </div>

        <HorizontalScroll images={images} speed={20000} />
      </div>
    </div>
  );
};

export default TryOn;
