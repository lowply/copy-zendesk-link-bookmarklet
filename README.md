# Copy Zendesk link bookmarklet

Copies a markdown link to the Zendesk ticket you're currently viewing in the form of `[ZD#000000 - ticket title](ticket URL)`.

## Usage

1. Drag the link to your bookmark bar: [Copy ZD link](javascript:%28%20function%28%29%7B%20url%20%3D%20window%2Elocation%2Ehref%3B%20if%20%28url%2EindexOf%28%22zendesk%2Ecom%22%29%20%21%3D%20%2D1%29%20%7B%20sub%20%3D%20document%2EgetElementById%28%22ember3466%22%29%2Evalue%2Etrim%28%29%3B%20tid%20%3D%20document%2EgetElementById%28%22ember3416%22%29%2EinnerHTML%2Eslice%28%2D6%2C%20%2D1%29%3B%20textArea%20%3D%20document%2EcreateElement%28%22textarea%22%29%3B%20textArea%2Evalue%20%3D%20%22%5BZD%23%22%20%2B%20tid%20%2B%20%22%20%2D%20%22%20%2B%20sub%20%2B%20%22%5D%28%22%20%2B%20url%20%2B%20%22%29%22%3B%20document%2Ebody%2EappendChild%28textArea%29%3B%20textArea%2Eselect%28%29%3B%20document%2EexecCommand%28%22copy%22%29%3B%20console%2Elog%28%22Markdown%20link%20%22%20%2B%20textArea%2Evalue%20%2B%20%22%20has%20been%20copied%20to%20your%20clipboard%21%22%29%3B%20textArea%2Eremove%28%29%3B%20%7Delse%7B%20console%2Elog%28%22This%20bookmarklet%20only%20works%20on%20domain%20under%20zendesk%2Ecom%2E%22%29%3B%20%7D%20%7D%20%29%28%29%3B%20)
1. Click bookmarklet on a page to get the link on your clipboard

## Developing locally

1. Clone down the repo and `cd` into the directory
1. Make your changes to `main.js`
1. Run `make.sh`

## Development status

It works for me. It may not work in your browser of choice, and may break at any time if Zendesk's markup changes.

## Inspired by

@benbalter's [Copy issue link bookmarklet](https://github.com/benbalter/copy-issue-link-bookmarklet)
