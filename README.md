# Copy Zendesk link bookmarklet

Copies a markdown link to the Zendesk ticket you're currently viewing in the form of `[ZD#000000 - ticket title](ticket URL)`.

## Usage

1. Visit [lowply.github.io/copy-zendesk-link-bookmarklet](https://lowply.github.io/copy-zendesk-link-bookmarklet/)
1. Drag the link to your bookmark bar
1. Click bookmarklet on a page to get the link on your clipboard

## Developing locally

Requires Node.js to build the bookmarklet.

1. Clone the repo and `cd` into the directory
1. Make changes to `copy-zendesk-link-markdown.js`
1. Run `npm install && npm run compile`

## Development status

It works for me. It may not work in your browser of choice, and may break at any time if Zendesk's markup changes.

## Inspired by

@benbalter 's [Copy issue link bookmarklet](https://github.com/benbalter/copy-issue-link-bookmarklet)
