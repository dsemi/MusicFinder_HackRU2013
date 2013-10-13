$(document).ready(function() {
	console.log("Yya")
	if (!('webkitSpeechRecognition' in window)) {
	  upgrade();
	} else {
	  var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onstart = function() {

	  }
	  recognition.onresult = function(event) {
	  	console.log("The event is: "+event);
	  	$.ajax({
	  		url: '',
	  		type: 'POST',
	  		dataType: 'text',
	  		success: function(resp) {
	  			console.log(resp);
	  		}
	  	})
	  }
	  recognition.onerror = function(event) {

	  }
	  recognition.onend = function() {

	  }
	}
}




var rdio = require("http://www.rdio.com/api/api.js?client_id=VbZ4G9Z-2iTpsUomxNh68w");
rdio.ready(function() {
	rdio.request({method: "search", content: {
			type: "track",
			count: 1,
			query: trackName
		},
		success: function(response) {
			var top = response.result[0];
			console.log(top.name + " by " + top.artist);
		},
		error: function(response) {
			console.log("error: " + response.message);
		}
	});
	rdio.player.play({source: top.key});
});
