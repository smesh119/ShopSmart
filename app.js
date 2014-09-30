$(document).ready(function() {
	$(".query").keydown(function(e){
		if(e.which == 13){
			var toAdd = $("input class="query",[name=checklistitem]").val();
			$(".list").append("<li class="added"><input type="checkbox" name="item"  value="1">
              <span class="on-list">" + toAdd + "</span></li>");
				$(document).on("click", ".added", function(){
				$(this).remove();
			
	});

});