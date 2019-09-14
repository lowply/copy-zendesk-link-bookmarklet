javascript:(function(){
    const url = window.location.href;
    if (url.indexOf("zendesk.com") < 0) {
        console.log("This bookmarklet only works on domain under zendesk.com.");
        return false;
    }

    const selected = document.getElementById("tabs").getElementsByClassName("selected");
    if (selected.length == 0){
        return false;
    }

    const ch = selected[0].getElementsByClassName("tab-content-holder")[0];
    const sub = ch.getElementsByClassName("title")[0].innerHTML;
    const tid = ch.getElementsByClassName("subtitle")[0].innerHTML.trim().replace(/^#/g, "");

    let textArea = document.createElement("textarea");
    textArea.value = "[ZD#" + tid + " - " + sub + "](" + url + ")";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();
