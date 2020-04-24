import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
import Clarifai from 'clarifai'

const app = new Clarifai.App({
 apiKey: 'd6eea73651224ec8b4892e677d7a4f52'
});

function TakePic (props) {
  const [dataUri, setDataUri] = useState('');
  const [imgDone,setImgDone] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    // console.log(dataUri);
    setDataUri(dataUri);
    setImgDone(true);
    //top 22 char are invalid
    // const obj = { base64: dataUri.substring(22) }
    const obj = { base64: dataUri }
    props.onButtonFinishPic(obj)
  }

  const isFullscreen = false;

  return (
    <div>
      { (imgDone)
        ? <img src={dataUri}/>
        : (
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )
      }
    </div>
  );
}

export default TakePic;
