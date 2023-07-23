import { RiCloseFill } from "react-icons/ri";
import { imageProp } from "../types";

const ImageThumb: React.FC<imageProp> = ({ image, alt, onCancel }) => {
  return (
    <div className="w-[90px] relative h-[90px] border rounded-2xl flex items-center justify-center text-orange-500 text-4xl overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-top"
      />
      <button
        className="absolute top-1 right-2 text-red-500 text-[20px] shadow-md"
        onClick={onCancel}
      >
        <RiCloseFill />
      </button>
    </div>
  );
};

export default ImageThumb;
