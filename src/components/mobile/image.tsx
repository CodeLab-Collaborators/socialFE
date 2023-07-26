//component for images
type iIMage = {
  image: any;
};
const ImageComponent: React.FC<iIMage> = ({ image }) => {
  return (
    <img
      src={image}
      className="w-screen h-[300px] md:hidden object-cover object-top"
    />
  );
};

export default ImageComponent;
