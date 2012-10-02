var $ = function(id) { return document.getElementById(id); }


	

//function that executes on window load
window.onload = function () {
	$('#slideshow').slideshow({
				timeout: 3500
				});	
	//alert('Warning Website Under Construction! \n'
			//+ 'The webpages under this domain are not finished and are a work in progress, ergo, I would advise '
			//+ 'you to come back in a couple weeks when the website will be done.');
		
}