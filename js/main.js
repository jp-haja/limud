$( document ).ready(function() {

	$("#filters a").on('click', function(){
		$("#filters a").removeClass('filtrado');
		$(this).toggleClass('filtrado');
	});

	// isotope
	$( function() {
	  // inicia Isotope
	  var $container = $('#isotope').isotope({
	    itemSelector: 'div',
	    layoutMode: 'masonry',
	    masonry: {columnWidth: 1}
	  });

	  setTimeout(function(){
	      $('#isotope').isotope({ sortBy: 'symbol' });	    
	  }, 1500);

	  var $checkboxes = $('#filters a');

		$checkboxes.click(function(){
			var filters = [];

			$checkboxes.filter('.filtrado').each(function(){
				filters.push( $(this).attr('data-filter') );
			});

			filters = filters.join(', ');
			$('#isotope').isotope({ filter: filters }).isotope({ sortBy : 'symbol' });

		});

		// abre o box da letra para a seção descritiva
		$container.on( 'click', 'div', function() {
			var fechar_div = $('#isotope .col-lg-6');
			$(this).toggleClass('col-lg-2 col-lg-6');
			// $(this).removeClass('col-lg-2').addClass('col-lg-6');
			// $('a', this).on('click', function(){				
			// 	$(this).parent().parent().toggleClass('col-lg-6 col-lg-2');
			// });
			$container.isotope('layout');
			setTimeout(function(){
			  $('#isotope').isotope({ sortBy: 'symbol' });	    
			}, 500);
		});
	  
	});

});