import ImageShow from "./ImageShow";

function ImageList({images}) {
  const rendedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div>{rendedImages}</div>;
}

export default ImageList;
