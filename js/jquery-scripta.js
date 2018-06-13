$( document ).ready(function() {
	
	$(".search-button").click(function (){
		var sm = $(".search-module");
		sm.slideToggle();
	});

	$("#fizicna").click(function (){
		$("#fizicna").parent().addClass("active");
		$("#pravna").parent().removeClass("active");
		$(".pravna-fields").addClass("hidden");
	});

	$("#pravna").click(function (){
		$("#pravna").parent().addClass("active");
		$("#fizicna").parent().removeClass("active");
		$(".pravna-fields").removeClass("hidden");
	});

	$(".footer-expand").click(function(){
		$(this).children("img").toggle();
		if($($(this).data("target")).hasClass("hidden-sm")){
			$($(this).data("target")).removeClass("hidden-sm");
		}
		else {
			$($(this).data("target")).addClass("hidden-sm");
		}
	});

	$.getJSON( "https://world.openfoodfacts.org/api/v0/product/737628064502.json", function( data ) {
    	$.each( data.product.ingredients, function( index, value ){
			console.log(value.text);
		});
	});

});