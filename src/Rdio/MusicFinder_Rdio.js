R.ready(function() {
	R.request({method: "search", content: {
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
	R.player.play({source: top.key});
});
