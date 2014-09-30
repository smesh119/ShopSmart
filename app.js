$(document).ready(function() {
	$(".query").keydown(function(e){
		if(e.which == 13){
			var toAdd = $("input[name=checklistitem]").val();
			$(".list").append("<li class="added">" + toAdd + "</li>");
	});
			$(document).on("click", ".added", function(){
				$(this).remove();
			
	});

});