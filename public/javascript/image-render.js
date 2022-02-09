var myWidget = cloudinary.createUploadWidget({
    cloudName: 'pc-rater',
    uploadPreset: 'my_preset' }, 
     (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info);
        var inputBox = document.getElementById('post-url');
        inputBox.value = result.info.url;
        console.log(inputBox.value);
        var imageConatiner = document.getElementById('image-container');
        var imageRender = document.createElement('img');
        imageRender.setAttribute('src', inputBox.value);
        imageConatiner.appendChild(imageRender);
      }
     }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);