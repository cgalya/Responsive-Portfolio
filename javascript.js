/*this code was borrowed from: 
https://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528*/

jQuery(document).ready(function($) {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_src = $(this).attr("src");
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_src + '" />');
			$('#lightbox').show();
		} else { 
				var lightbox = 
				'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + 
					'<img src="' + image_src +'" />' +
				'</div>' +	
				'</div>';
				
			$('body').append(lightbox);
		}
	});
	$('#lightbox').live('click', function() { 
		$('#lightbox').hide();
	});
});