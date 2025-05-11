import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({images}) {
  const rendedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{rendedImages}</div>;
}

export default ImageList;
