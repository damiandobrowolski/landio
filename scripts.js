//Shows hide profile after click.
		function clickToShowProfile(){
			var click = document.getElementById("popUpProfile");

			if(click.style.display === "none"){
				click.style.display = "block";
			}
			else{
				click.style.display = "none";
			}

			// if(bodyClick){
			// 	click.style.display = "none";
			// }
		}
		// document.body.addEventListener('click', clickToShowProfile(), true); 
