import React from 'react';
import '../components/ImageList.css'
import ImageGrid from "./ImageGrid";

const ImageList = (props) => {
  const images = props.images.map((image) => {
      return <ImageGrid key={image.id} image={image}/>
    });

  return <div className={'image-list'}>{images}</div>
}

export default ImageList;
