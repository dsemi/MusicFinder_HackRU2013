var rdio = require("http://www.rdio.com/api/api.js?client_id=VbZ4G9Z-2iTpsUomxNh68w");

function getQueryVariable() {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  var newDict = new Object;
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    var[pair[0]] = pair[1];
    }
  } 
  return newDict;
}

var trackName = getQueryVariable("trackName");

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
