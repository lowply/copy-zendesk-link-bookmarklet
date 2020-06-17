# Copy Zendesk link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy ZD link](javascript:(()=%3E%7Bconst%20e=window.location.href;if(e.indexOf(%22zendesk.com%22)%3C0)return%20console.log(%22This%20bookmarklet%20only%20works%20on%20zendesk.com.%22),!1;const%20t=document.querySelector(%22div%5Baria-label=Tabs%5D%20%5Baria-selected=true%5D%22);if(null==t)return%20console.log(%22Can't%20find%20the%20selected%20tab.%22),!1;if(%22ticket%22!=t.getAttribute(%22data-entity-type%22))return%20console.log(%22The%20selected%20tab%20is%20not%20a%20ticket%20tab.%22),!1;const%20o=t.querySelector(%22div%5Bdata-test-id=header-tab-title%5D%22).innerText,n=t.querySelector(%22div%5Bdata-test-id=header-tab-subtitle%5D%20span%22).innerText;if(null==o%7C%7Cnull==n)return%20console.log(%22Can't%20find%20the%20title%20or%20ticket%20id%20of%20the%20selected%20tab.%22),!1;let%20l=document.createElement(%22textarea%22);l.value=%22%5BZD#%22+n.trim()+%22%20-%20%22+o.trim()+%22%5D(%22+e+%22)%22,document.body.appendChild(l),l.select(),document.execCommand(%22copy%22),console.log(%22Markdown%20link%20%22+l.value+%22%20has%20been%20copied%20to%20your%20clipboard!%22),l.remove()%7D)();)

See [github.com/lowply/copy-zendesk-link-bookmarklet](https://github.com/lowply/copy-zendesk-link-bookmarklet) for more information.
