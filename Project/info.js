$(document).ready(function() {
	$( "#tabs" ).accordion({
		collapsible: true,
		active: false
	});
	var url = "https://api.flickr.com/services/feeds/photos_public.gne?"+
        "id=171092675@N07&format=json&jsoncallback=?&tags=mmcgee26javacode";
        
        $.getJSON(url, function(data){
            var html ="";
            $.each(data.items, function(key, value){
              html += "<a href=" + value.media.m + ">";
              html += "<img src=" + value.media.m + "></a>";
            });
        $("#flikr").html(html);
        //alert("HI");
            });
}); //end ready