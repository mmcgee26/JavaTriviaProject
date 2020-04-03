$(document).ready(function() {
	$.getJSON("authorinfo.json", function(result){
		$.each(result, function() {
			$.each(this, function(key, value) {
				$("#author").append("<p>" + 
					value.name + "</p><a href='mailto:mmcgee26@uncc.edu'>" +
					value.email + "</a><p>" + 
					value.phone + "<p>");
			});
		});
	});
});