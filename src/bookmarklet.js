javascript:(() => {
    const url = window.location.href;

    if (url.indexOf("zendesk.com") < 0) {
        console.log("This bookmarklet only works on zendesk.com.");
        return false;
    }

    const selected = document.querySelector("#tabs .selected");
    if (selected == null){
        console.log("Can't find the selected tab.");
        return false;
    }

    const title = document.querySelector("#tabs .selected .tab-content-holder .tab_text .title");
    const tid = document.querySelector("#tabs .selected .tab-content-holder .tab_text .subtitle");
    if (title == null || tid == null){
        console.log("Can't find the title or ticket id of the selected tab.");
        return false;
    }

    let textArea = document.createElement("textarea");
    textArea.value = "[ZD" + tid.innerHTML.trim() + " - " + title.innerHTML + "](" + url + ")";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();
