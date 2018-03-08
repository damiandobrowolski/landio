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

		var hamburger = $('.hamburger');
		
		$(document).ready(function(){
			$('.hamburger').click(function(){
				// $(this).addClass('cross');
				$(this).toggleClass('cross');
				$('.menu-mobile').toggleClass('none');
			})
		
		})