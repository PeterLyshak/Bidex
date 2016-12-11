$(document).ready(function() {
 
  $("#carousel").owlCarousel({
	  pagination: true,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem : true,
			autoPlay: 4000,
          navigationText: []
  });
	
	$(".select").styler({});
	
   	$('.page-header__toggle').click(function(){
	$(".page-header__nav").toggleClass("page-header__nav--opened");
   });

	
});
