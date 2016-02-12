;(function(){
	'use strict';
		var btnLeftpart = document.getElementsByClassName('l-m');
		var btnMidpart = document.getElementsByClassName('p-m');
		var btnRightpart = document.getElementsByClassName('r-m');
		var profileMainContainer = document.getElementsByClassName('profile-main-container');
		var colRight = document.getElementsByClassName('col-right');

		var tabLeft = document.getElementById('leftTab');
		var tabMiddle = document.getElementById('middleTab');
		var tabRight = document.getElementById('rightTab');
		var profileMainContainer= document.getElementsByClassName('profile-main-container');

		function mainInit(){
			for(var i = 0; i < btnMidpart.length; i++){
				btnMidpart[i].onclick = function(){
					var index = i;
					return function(){
						btnMidpart[index].style.background = '#7dd9e8';
						btnLeftpart[index].style.background = 'url(../images/m-l.png) no-repeat';
						btnRightpart[index].style.background = 'url(../images/m-r.png) no-repeat';
					};
				}
			}

			var colRightHeight = colRight.offsetHeight;
			// profileMainContainer.style.height = colRightHeight + 'px';
			profileMainContainer[0].height = colRightHeight + 'px';
			profileMainContainer[1].height = colRightHeight + 'px';
			profileMainContainer[2].height = colRightHeight + 'px';

			tabLeft.onclick = function(){
				// alert('hello');
				profileMainContainer[0].style.display = 'block';
				profileMainContainer[1].style.display = 'none';
				profileMainContainer[2].style.display = 'none';
	
				tabLeft.style.borderBottom = '2px solid #cceff5';
				tabMiddle.style.borderBottom = 'none';
				tabRight.style.borderBottom = 'none';
	
				tabLeft.style.background = 'url(../images/set-tab-l-active.png) no-repeat';
				tabMiddle.style.background = '#f5f5f5';
				tabRight.style.background = 'url(../images/set-tab-r.png) no-repeat';
			}
	
			tabMiddle.onclick = function(){
				profileMainContainer[0].style.display = 'none';
				profileMainContainer.children[1].style.display = 'block';
				profileMainContainer[2].style.display = 'none';
	
				tabLeft.style.borderBottom = 'none';
				tabMiddle.style.borderBottom = '2px solid #cceff5';
				tabRight.style.borderBottom = 'none';
	
				tabLeft.style.background = 'url(../images/set-tab-l.png) no-repeat';
				tabMiddle.style.background = '#f5f5f5';
				tabRight.style.background = 'url(../images/set-tab-r.png) no-repeat';
			};
			tabRight.onclick = function(){
				profileMainContainer[0].style.display = 'none';
				profileMainContainer[1].style.display = 'none';
				profileMainContainer.children[2].style.display = 'block';
	
				tabLeft.style.borderBottom = 'none';
				tabMiddle.style.borderBottom = 'none';
				tabRight.style.borderBottom = '2px solid #cceff5';
	
				tabLeft.style.background = 'url(../images/set-tab-l.png) no-repeat';
				tabMiddle.style.background = 'f5f5f5';
				tabRight.style.background = 'url(../images/set-tab-r-active.png)';
			};
		}	
		mainInit();
})();