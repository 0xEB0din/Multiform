$(document).ready(function(){
	$('button#apply').on('click',function(){
	    var sel_value = $('option:selected').val();
	if(sel_value==0)
	{
		//form reset -no form-
		$("#form_submit").empty();
		$("#multiform").css({'display':'none'});
	}
	else{
		//form reset
		$("#form_submit").empty();
		
		//form creation function
	    create(sel_value);
		
		//appending submit button to end of the form
		 $("#form_submit").append(
		 	$("<button/>",{type:'submit', class:'btn btn-primary'}).append(
		 		$("<div/>",{class:'glyphicon glyphicon-ok'}).text(" Send")
		 	),
		 	$("<br/>"),
		 	$("<br/>")
		)
		}
	});
	
function create(sel_value){
   for(var i=1;i<=sel_value;i++)   
	   {
	    $("div#multiform").slideDown('slideDown');
	    $("div#multiform").append(
		$("#form_submit").append(
		$("<div/>",{id:'head'}).append(
		$("<h4/>").text("Client "+i)),
		$("<div/>", {class:'form-group'}).append(
			$("<label/>").text("The name of the client :"),
			$("<input/>", {type:'text', name:'client-name'+i, class:'form-control', placeholder:'Write the client\'s name'})),
		$("<label/>").text("Address of this client :"),
		$("<div/>", {class:'form-group'}).append($("<input/>", {type:'text', class:'form-control', placeholder:'Address', name:'client-address'+i})),
		$("<div/>", {class:'form-group'}).append($("<input/>", {type:'text', class:'form-control', placeholder:'Address 2', name:'client-address'+i})),
		$("<input/>", {type:'text', class:'form-control', placeholder:'District', name:'client-district'+i}),			
		$("<hr/>")
		// in case a submit button needed for each form
		//$("<button/>", {type:'submit', class:'btn btn-default'}).text("submit")
	        ))
	    }
	}
});