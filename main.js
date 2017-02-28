javascript:(
	function(){
		url = window.location.href;
		if (url.indexOf("zendesk.com") != -1) {
			selected = document.getElementById("tabs").getElementsByClassName("selected");
			if (selected.length != 0){
				ch = selected[0].getElementsByClassName("tab-content-holder")[0];
				sub = ch.getElementsByClassName("title")[0].innerHTML;
				tid = ch.getElementsByClassName("subtitle")[0].innerHTML.trim().replace(/^#/g, "");
				textArea = document.createElement("textarea");
				textArea.value = "[ZD#" + tid + "-" + sub + "](" + url + ")";
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand("copy");
				console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
				textArea.remove();
			}
		}else{
			console.log("This bookmarklet only works on domain under zendesk.com.");
		}
	}
)();
