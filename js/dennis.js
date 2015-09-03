var Dennis = (function() {
    var start = function() {
        // $(".content").hide();

       	$(document).ready(function() {
  			$(document).on('keyup', function() {
  				
			});

			$(document).on('click', function() {    
					
			});

			$(document).on('mousewheel', function() {   
							
			});
		});


    };

    var updateTitle = function(){
    	var curr = 	String($(location).attr('href'));
				curr = curr.substring(curr.indexOf('_')+1);
				if(curr === 'code'){
					$('.subtitle').text('Projects');
				} else if(curr === 'home'){
					$('.subtitle').text('');
				} else if(curr === 'edu'){
					$('.subtitle').text('Education');
				} else if(curr === 'contact'){
					$('.subtitle').text('Contact Me');
				} else if(curr === 'about'){
					$('.subtitle').text('I am...');
				};
    }
    


    return {
        start: start
    };
    
})();
