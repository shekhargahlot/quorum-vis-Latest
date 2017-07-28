function resolve_manual(bank){
	if (confirm('Proceed with manual mode of gridlock resolution?')){
		resolve_request(bank);
	}
}

function resolve(){
	if (confirm('Proceed with automatic gridlock resolution?')){
		resolve_request("bankB", function(){
			resolve_request("bankA", function(){
				resolve_request("bankC");
			});
		});
	}
}

function resolve_request(bank, callback){
	document.getElementById(bank).style["background-color"] = "yellow";
	setTimeout(function(){
		document.getElementById(bank).style["background-color"] = "white";
		callback();
	}, 2000);
}