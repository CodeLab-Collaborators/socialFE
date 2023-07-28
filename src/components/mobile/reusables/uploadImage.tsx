import { ChangeEvent, FC, useRef } from "react";
import { imgData } from "../../../types";

const UploadImage: FC<imgData> = ({ setImages, icon, css }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;
    const imagePromises: Promise<string>[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const promise = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            resolve(reader.result);
          } else {
            resolve("");
          }
        };
        reader.readAsDataURL(file);
      });

      imagePromises.push(promise);
    }
    try {
      const imageDataArray = await Promise.all(imagePromises);
      //   setImages(imageDataArray);
      setImages(imageDataArray);
    } catch (error) {
      console.error("Error reading images:", error);
    }
  };

  return (
    <div>
      <label htmlFor="imageInput" className={`${css} `}>
        {icon}
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleImageChange}
        id="imageInput"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default UploadImage;
