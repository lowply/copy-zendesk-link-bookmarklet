javascript:(
	function(){
		url = window.location.href;
		if (url.indexOf("zendesk.com") != -1) {
			sub = document.getElementById("ember3466").value.trim();
			tid = document.getElementById("ember3416").innerHTML.slice(-6, -1);
			textArea = document.createElement("textarea");
			textArea.value = "[ZD#" + tid + "-" + sub + "](" + url + ")";
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
			textArea.remove();
		}else{
			console.log("This bookmarklet only works on domain under zendesk.com.");
		}
	}
)();
