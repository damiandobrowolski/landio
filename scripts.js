//Shows hide profile after click.
		function clickToShowProfile(){
			var click = document.getElementById("popUpProfile");

			if(click.style.display === "none"){
				click.style.display = "block";
			}
			else{
				click.style.display = "none";
			}
		}
		 

//HAMBURGER MENU		
		$(document).ready(function(){
			$('.hamburger').click(function(){
				// $(this).addClass('cross');
				$(this).toggleClass('cross');
				$('.menu-mobile').toggleClass('none');
			})
		
		})

