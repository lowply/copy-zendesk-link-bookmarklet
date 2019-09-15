# Copy Zendesk link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy ZD link](javascript:(()=%3E%7Bconst%20e=window.location.href;if(e.indexOf(%22zendesk.com%22)%3C0)return%20console.log(%22This%20bookmarklet%20only%20works%20on%20zendesk.com.%22),!1;if(null==document.querySelector(%22#tabs%20.selected%22))return%20console.log(%22Can't%20find%20the%20selected%20tab.%22),!1;const%20t=document.querySelector(%22#tabs%20.selected%20.tab-content-holder%20.tab_text%20.title%22),o=document.querySelector(%22#tabs%20.selected%20.tab-content-holder%20.tab_text%20.subtitle%22);if(null==t%7C%7Cnull==o)return%20console.log(%22Can't%20find%20the%20title%20or%20ticket%20id%20of%20the%20selected%20tab.%22),!1;let%20n=document.createElement(%22textarea%22);n.value=%22%5BZD%22+o.innerHTML.trim()+%22%20-%20%22+t.innerHTML+%22%5D(%22+e+%22)%22,document.body.appendChild(n),n.select(),document.execCommand(%22copy%22),console.log(%22Markdown%20link%20%22+n.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),n.remove()%7D)();)

See [github.com/lowply/copy-zendesk-link-bookmarklet](https://github.com/lowply/copy-zendesk-link-bookmarklet) for more information.
