// This is a JavaScript file

// FUNÇÃO CAMERA

$(document).on("click", "#camera", function(){

    navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    //correctOrientation:true, 
    //saveToPhotoAlbum:true
    });

    function onSuccess(imageURI) {
        var image = document.getElementById('demo');
        image.src = imageURI;
    }

    function onFail(message) {
         navigator.notification.aler('Erro ao capturar a imagem: ' + message);
    }
});
