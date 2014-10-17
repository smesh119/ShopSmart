$(document).ready(function() {

$(".query").keydown(function(e){
	if(e.which == 13){
	var toAdd = $("input[name=checklistitem]").val();
	console.log(toAdd)
	$(".list").append("<li class=\"added\"><span class=\"on-list\"> " + toAdd + "</span>
  	<img class=\"delete\" src=\"delete.gif\">
	</li>");	
	}	
});

$(".query").on("focus", function(e){
$(".query").val("")
});

$(".query").keyup(function(e){
if (e.which == 13) {
$(".query").val("")
};
});

$(function() {
$( "ul" ).sortable();
$( "ul" ).disableSelection();

});

$(document.body).delegate(".list .on-list", "click", function(event){
$(this).toggleClass("highlight");
});

$(document.body).delegate(".delete", "click", function(){
$(this).parent().remove();
});


});
