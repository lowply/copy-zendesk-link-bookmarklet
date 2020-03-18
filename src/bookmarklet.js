javascript:(() => {
    const url = window.location.href;

    if (url.indexOf("zendesk.com") < 0) {
        console.log("This bookmarklet only works on zendesk.com.");
        return false;
    }

    const selected = document.querySelector("div[aria-label=Tabs] [aria-selected=true]");
    if (selected == null){
        console.log("Can't find the selected tab.");
        return false;
    }

    if (selected.getAttribute("data-entity-type") != "ticket"){
        console.log("The selected tab is not a ticket tab.");
        return false;
    }

    const title = selected.getAttribute("aria-label").replace(/^web /, "");
    const tid = selected.getAttribute("data-entity-id");
    
    if (title == null || tid == null){
        console.log("Can't find the title or ticket id of the selected tab.");
        return false;
    }

    let textArea = document.createElement("textarea");
    textArea.value = "[ZD#" + tid.trim() + " - " + title.trim() + "](" + url + ")";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    console.log("Markdown link " + textArea.value + " has been copied to your clipboard!");
    textArea.remove();
})();