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

