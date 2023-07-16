import cultural from "../../assets/images/cultural.jpg";
import riverSystem from "../../assets/images/riversystem.jpg";
import climate from "../../assets/images/climate.jpg";
import biodiversity from "../../assets/images/biodiversity.jpg";
import threat from "../../assets/images/threat.jpg";
interface ImageContainerProps {
  selectedImage: keyof typeof imageMap;
  isOpen: boolean;
}

const imageMap = {
  Biodiversity: biodiversity,
  "River System": riverSystem,
  "Climate and Environment": climate,
  "Cultural Diversity": cultural,
  "Threats and Conservation": threat,
};

const ImageContainer = ({ selectedImage, isOpen }: ImageContainerProps) => {
  return (
    <div
    key={selectedImage}
    className="w-1/2">
      <img className="opacity-1" src={imageMap[selectedImage]} alt="" />
    </div>
  );
};

export default ImageContainer;
