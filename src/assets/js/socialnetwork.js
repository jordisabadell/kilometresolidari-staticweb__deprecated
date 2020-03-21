var loadTwitterTimeline = function() {

	$.getJSON("data/tweets.json", function(data) {
	  	var items = [];
	  	if(data && data.length>0) {

			$.each( data, function(key, val) {
		  	var class_=(key==0)?'item active':'item';

			var date_ = Utils.prettyDate(val.created_at); 
			
		  	//calculate url
		  	var text = val.text;
		  	var url = "#";
		  	var pos = text.lastIndexOf("https");
		  	if(pos>0) {
		  		url = text.substring(pos);
		  		text = text.substring(0,pos);
		  	}

		  	var user_name = val.user_name;
		  	var user_avatar = val.user_avatar;

		    items.push(
		    	"<div class='" + class_ + "'>" +		    		
			    	"<div class='profile'>" + 
			    		"<a href='https://twitter.com/" + user_name + "' title='Veure perfil " + user_name + "' target='_blank'>"+
			    			"<img src='" + user_avatar + "' alt='Fotografia perfil " + user_name + "' title='Veure perfil " + user_name + "'>"+
			    			"<div><span>" + user_name + "</span> // " + date_ + "</div>" + 
			    		"</a>" + 
			    	"</div>" +
			    	"<div class='tweet'><a href='" + url + "' title='Veure el tweet' target='_blank'><h4>" + text + "</h4></a></div>" +			    	
		    	"</div>" );
		  });
		}
		var html="";
		$.each(items, function(key, value) {
			html+=value;
		});
		$("#twitter-content").html(html);

		$("#twitter-loader").addClass("hidden");
	});
}