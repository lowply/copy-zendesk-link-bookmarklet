# Copy Zendesk link bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

[Copy ZD link](javascript:%28%20function%28%29%7B%20url%20%3D%20window%2Elocation%2Ehref%3B%20if%20%28url%2EindexOf%28%22zendesk%2Ecom%22%29%20%21%3D%20%2D1%29%20%7B%20sub%20%3D%20document%2EgetElementById%28%22ember3466%22%29%2Evalue%2Etrim%28%29%3B%20tid%20%3D%20document%2EgetElementById%28%22ember3416%22%29%2EinnerHTML%2Eslice%28%2D6%2C%20%2D1%29%3B%20textArea%20%3D%20document%2EcreateElement%28%22textarea%22%29%3B%20textArea%2Evalue%20%3D%20%22%5BZD%23%22%20%2B%20tid%20%2B%20%22%20%2D%20%22%20%2B%20sub%20%2B%20%22%5D%28%22%20%2B%20url%20%2B%20%22%29%22%3B%20document%2Ebody%2EappendChild%28textArea%29%3B%20textArea%2Eselect%28%29%3B%20document%2EexecCommand%28%22copy%22%29%3B%20console%2Elog%28%22Markdown%20link%20%22%20%2B%20textArea%2Evalue%20%2B%20%22%20has%20been%20copied%20to%20your%20clipboard%21%22%29%3B%20textArea%2Eremove%28%29%3B%20%7Delse%7B%20console%2Elog%28%22This%20bookmarklet%20only%20works%20on%20domain%20under%20zendesk%2Ecom%2E%22%29%3B%20%7D%20%7D%20%29%28%29%3B%20)

See [github.com/lowply/copy-zendesk-link-bookmarklet](https://github.com/lowply/copy-zendesk-link-bookmarklet) for more information.
