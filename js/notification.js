;(function(){
			'use strict';
			var notif = document.getElementById('f-req');
			var invites = document.getElementById('invite-box');
			
			notif.onclick= function(){
				updateNot(notif);
			};
			
			invites.onclick = function(){
				updateNot(invites);
			};
			
			var updateNot = function(spanId){
				var imgNotif=spanId.children[0].children[0];
				// console.log(imgNotif);
				if(spanId===notif){
					imgNotif.style.background='url(images/requests-active.png)';
				}
				else if(spanId===invites){
					imgNotif.style.background='url(images/invites-active.png)';
				}					
				var noNotif = spanId.children[0].children[2];
				var counter = noNotif.innerHTML;
				counter++;
				noNotif.innerHTML = counter;
			};
			
})();