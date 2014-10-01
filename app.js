$(document).ready(function() {
	$(".query").keydown(function(e){
		if(e.which == 13){
			var toAdd = $("input[name=checklistitem]").val();
			console.log(toAdd)
			$(".list").append("<li class=\"added\"><input type=\"checkbox\" name=\"item\"  value=\"1\">\
              <span class=\"on-list\">" + toAdd + "</span></li>");
		}
	});
		$(function(){
			$(".added").sortable();
			$(".added").disableSelection();
		});

		$(document.body).delegate(".list li", "click", function(event){
		$(this).remove()
		});
		
		var target = $(event.target);
		if (target.is("input[name=item]")) {
			target.stop();
		};
	

});
