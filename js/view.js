;(function(){
	'use strict';

	var listArr = [];
	var imageDivArr = [];
	var clicked = [];

	var listDiv = document.getElementsByClassName('list');
	console.log(listDiv);

	var imageDiv= document.getElementsByClassName('iImage');
	console.log(imageDiv);


	/* pushing 'list' and 'iImage' to an array*/

	for(var i=0;i<listDiv.length;i++){
		listArr.push(listDiv[i]);
		console.log(listDiv[i]);
		//clicked.push(false);
	};

	for(var i=0;i<imageDiv.length;i++){
		imageDivArr.push(imageDiv[i]);
		console.log(imageDivArr) ;
		clicked.push(false);
	};

	/*setting condition for normal and hover state when onmouseover complete div*/

	for(var i=0;i<listArr.length;i++){
		listArr[i].onmouseover = function(){
			var index = i;
			return function(){
				
				if (clicked[index] === false) {
					imageDiv[index].style.display = 'inline-block';
				}
			
			};
		}();
	};

	for(var i=0;i<listArr.length;i++){
		listArr[i].onmouseout = function(){
			var index = i;
			return function(){
				if (clicked[index] === false) {
					imageDiv[index].style.display = 'none';
				}
			
			};
		}();
	};


/*setting condition for normal and hover state when onmouseover image icon*/


	for(var i=0;i<imageDivArr.length;i++){
		imageDivArr[i].onmouseover = function(){
			var index = i;
			return function(){
				if(clicked[index] === false){
					imageDiv[index].style.background = 'url(images/iImage1.png)';
				}
			};
		}();
	};

	for(var i=0;i<imageDivArr.length;i++){
		imageDivArr[i].onmouseout = function(){
			var index = i;
			return function(){
				if(clicked[index] === false){
					imageDiv[index].style.background = 'url(images/iImage.png)';
				}
			};
		}();
	};

	var listPhotoAlternate = document.getElementsByClassName('alternate');
	var midOption = document.getElementsByClassName('mid-option');
	var listPhoto = document.getElementsByClassName('list-photo');

	for(var i=0;i<imageDivArr.length;i++){
		imageDivArr[i].onclick = function(){
			var index = i;
			
			return function(){
				if(clicked[index] === false){
					listPhotoAlternate[index].style.display = 'block';
					listPhotoAlternate[index].style.minHeight = '131px';
					midOption[index].style.display = 'none';
					listPhoto[index].style.display = 'none';
					imageDiv[index].style.background = 'url(images/close.png) no-repeat 0,0' ;
					clicked[index] = true;
				} 
				else if (clicked[index] === true){
					listPhotoAlternate[index].style.display = 'none';
					midOption[index].style.display = 'block';
					listPhoto[index].style.display = 'block';
					imageDiv[index].style.background = 'url(images/iImage.png)';
					clicked[index] = false;
				}
			};
		}();
	};

})();