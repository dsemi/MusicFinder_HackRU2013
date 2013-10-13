var rdio = require("http://www.rdio.com/api/api.js?client_id=VbZ4G9Z-2iTpsUomxNh68w");

var trackName = '{{ trackData["title"] }}';
var artist = '{{ trackData["artist"]["name"] }}';

rdio.ready(function() {
	rdio.request({method: "search", content: {
			type: "track",
			count: 1,
			query: trackName + ", " + artist
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
