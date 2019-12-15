var win =

function randomString() {
	var chars = "abcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.randform.randomfield.value = randomstring;
}


document.onkeyup = function(event) {
    var letter = event.key.toLowerCase();

    // If letter is chosen random, run the following functions/methods.
    if (letter === "") {
      car.honk();
      reWriteStats();
    }