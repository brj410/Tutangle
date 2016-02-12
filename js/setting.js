;(function(){
	'use strict';

	var that = this;
    var choosefile = document.getElementById('choosefile');
    console.log(choosefile);

    var choose = document.createElement('input');
    console.log(choose);
    choose.setAttribute('type','file');
    choose.style.opacity = '0';
    console.log(choose);
    choose.style.display = 'block';
    choose.setAttribute('id','fileUpload');
    choosefile.appendChild(choose);

    var profimg = document.getElementById('profImg');
    console.log(profimg);
    var upload = document.getElementById('uploadPhoto');
    upload.onclick = function(){
        var fileUpload = document.getElementById('fileUpload').files;  
        if(fileUpload.length>0){
            var fileToLoad = fileUpload[0];
            if(fileToLoad.type.match("image.*")){
                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){
                    var imageLoaded = document.createElement("img");
                    imageLoaded.src = fileLoadedEvent.target.result;
                    imageLoaded.width = 120;
                    imageLoaded.height = 120;
                    profimg.removeChild(profimg.children[1]);
                    profimg.appendChild(imageLoaded);
                };
                fileReader.readAsDataURL(fileToLoad);
            } 
        }
    };

   
    
    var choosefile1 = document.getElementById('choosefile1');
    var choose1 = document.createElement('input');
    choose1.setAttribute('type','file');
    choose1.style.display = 'block';
    choose1.setAttribute('id','chooseFile');
    choose1.style.opacity = '0';
    choosefile1.appendChild(choose1);

    var profimg1 = document.getElementById('profImg1');
    console.log(profImg1);
    var upload1 = document.getElementById('uploadPhoto1');
    upload1.onclick = function(){
        var fileUpload = document.getElementById('chooseFile').files;  
        if(fileUpload.length>0){
            var fileToLoad = fileUpload[0];
            if(fileToLoad.type.match("image.*")){
                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){
                    var imageLoaded = document.createElement("img");
                    imageLoaded.src = fileLoadedEvent.target.result;
                    imageLoaded.width = 120;
                    imageLoaded.height = 120;
                    profimg1.removeChild(profimg1.children[1]);
                    profimg1.appendChild(imageLoaded);
                };
                fileReader.readAsDataURL(fileToLoad);
            } 
        }
    };
})();