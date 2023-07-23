import { FiImage } from "react-icons/fi";
import Globalbutton from "../../../../reusables/globalbutton";
import { PiVideoFill } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { BiCamera, BiWorld } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ImageThumb from "../../../../reusables/ImageThumb";
import { ChangeEvent, useRef, useState } from "react";
import pic from "../../../../assets/myPix.png";
import axios from "axios";

const API_URL = "https://api.example.com/tweets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [tweet, setTweet] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // For the tweet
  const handleTweetTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
  };

  const handleTweetSubmit = async () => {
    try {
      const response = await axios.post(API_URL, {
        text: tweet,
        images: images,
      });
      console.log("Tweet posted:", response.data);

      // Clear the form after successful tweet submission
      setTweet("");
      setImages([]);
      navigate("/home"); // Redirect to the home page or the timeline page after posting
    } catch (error) {
      console.error("Error posting tweet:", error);
      // Handle error, e.g., display an error message to the user.
    }
  };

  //

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
      setImages(imageDataArray);
    } catch (error) {
      console.error("Error reading images:", error);
    }
  };

  //delete an image
  const handleCancelImage = (index: number) => {
    // Create a copy of the images array
    const updatedImages = [...images];
    // Remove the image at the specified index
    updatedImages.splice(index, 1);
    // Update the images state with the modified array
    setImages(updatedImages);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      {/* top */}

      <div className="w-full py-4 px-5 border-b flex items-center justify-between ">
        <button
          className="text-orange-500 text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoClose />
        </button>
        <div>
          <Globalbutton
            title="tweet"
            width="full"
            buttonType="submit"
            onclick={() => {
              handleTweetSubmit;
            }}
          />
        </div>
      </div>

      {/* text area move to a component */}
      <div className="w-full flex gap-4 px-5 pt-4 h-full ">
        {/* profile pic */}
        <div className="overflow-hidden rounded-full w-[50px] h-[45px]">
          <img src={pic} className="w-full h-full object-cover object-top" />
        </div>

        {/* text area to create post */}
        <textarea
          className="resize-none text-gray-500 outline-none rounded-lg w-full h-full  p-2 "
          placeholder="What's happening?"
          value={tweet}
          onChange={handleTweetTextChange}
        ></textarea>
      </div>

      {/* bottom */}
      <div>
        {/* upload image */}
        <div className="px-5 py-4 flex overflow-x-scroll no-scrollbar">
          {/* box */}
          <label
            htmlFor="imageInput"
            className="w-[90px] h-[95px] mr-[10px] border rounded-2xl cursor-pointer flex items-center justify-center text-orange-500 text-4xl"
          >
            <BiCamera />
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
          {/* image container */}
          <div className="flex whitespace-nowrap gap-3">
            {images.map((imageData, index) => (
              <ImageThumb
                key={index} // Add the "key" prop to the ImageThumb component
                image={imageData}
                alt={`Image ${index + 1}`}
                onCancel={() => handleCancelImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="border-t py-4 px-5">
          <div className="flex items-center gap-2 text-orange-500 font-medium">
            <p className="">
              <BiWorld />
            </p>
            <p className="text-xs tracking-tighter">every one can reply</p>
          </div>
        </div>
        <div className="w-full py-4 px-5 border-t flex items-center justify-between ">
          {/* post types */}
          <div className=" flex gap-7 text-3xl text-orange-500">
            <FiImage />
            <PiVideoFill />
            <GoLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
