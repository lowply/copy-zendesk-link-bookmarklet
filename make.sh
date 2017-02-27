#!/bin/bash

abort(){
	echo "${1}"
	exit 1
}

has(){
	type ${1} >/dev/null 2>&1 || abort "Command not found: ${1}"
}

has gsed
has nkf

cat main.js \
	| tr "\n" " " \
	| gsed -e "s/\t//g" \
	| gsed "s/\"-\"/\" - \"/g" \
	| nkf -WwMQ \
	| gsed "s/=$//g" \
	| tr -d "\n" \
	| gsed -e "s/=/%/g" \
	| gsed -e "s/%3A/:/g" \
	> main.bookmarklet

gsed -i "s/\[Copy ZD link\]\(.*\)/\[Copy ZD link\]\($(cat main.bookmarklet)\)/g" index.md
