import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview

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
        ?<div> 
          <img src={dataUri} alt=''/>
        </div>
        : (
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          :<div>
            <button onClick={props.onButtonBackHome} className=' grow  br5 ba'>❌</button> 
            <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
              isFullscreen={isFullscreen}
            />
          </div>
        )
      }
    </div>
  );
}

export default TakePic;
