# Face Recognition front-end: Smart Brain
This is a front end project built with React JS.
This is a web project that allow users to do a face recoginition of the image they choose.

## Showcase
Register<br /> 
![register](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/register.png)<br /> 
Sign in<br /> 
![signin](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/signin.png)<br /> 
Home <br /> 
![home](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/home.png)<br /> 
Copy a url then to be detected<br /> 
![url](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/copyUrl.png)<br /> 
Or simply take a picture of yourself :)<br /> 
![takePic](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/takePic.png)<br /> 
Then click detect, it will outline the face detected.<br /> 
![detect](https://github.com/yuechangSpace/FaceRecognition/blob/master/Screenshots/detect.png)<br /> 

## Project Structure
```
--src
	--components
		--Image (image preview component)
		--ImgLinkForm (url link)
		--Logo (the tiny logo)
		--Navigation (register, signin, signout)
		--Profile (show the current user name and 	entires to the app)
		--TakePic (provide take picture service)
	--container
		--App.js (home page and main logic)
```
### Get Starting

Simply run:

```
npm start
```

And for connecting to the back-end side:
Supposing we have the node js server on "http://localhost:4000/".
Simply change all fetch method in App.js

Like this one,
```
fetch("http://localhost:4000/image",{
  method:"post",
  headers:{
    'content-type': 'application/json'
  },

  body:JSON.stringify({
		"uri":uri
  })
})
```
See the backend project for more info.


## Authors

* **Yue Chang** - *Initial work* - [yuechangSpace](https://github.com/yuechangSpace/)

