type imageProp = {
  image: string;
  alt: string;
};

const ImageThumb: React.FC<imageProp> = ({ image, alt }) => {
  return (
    <div className="w-[90px] h-[90px] border rounded-2xl flex items-center justify-center text-orange-500 text-4xl overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default ImageThumb;
