# Numbers Requester

A SPA that consumes [the Numbers API](http://numbersapi.com/) and stores in a history all the requests that you've done. It uses Vue and Vue CLI 3.

You can see the app working in a live static http server here: [The Numbers Requester in Getforge](http://numbers-requester.getforge.io/).
If it doesn't work, try it with the mirror: [The Numbers Requester Mirror](http://numbers-requester.co.nf/).

Created for testing and learning Vue purposes. It does not work on http servers (explained why below).

## Why the Numbers Requester does not work on https servers?

This app does not work on https because it uses an http API to fetch the data ([the Numbers API](http://numbersapi.com/)). If you use an https server the ajax requests that performs this project will be blocked by the browser because of downgrade. Therefore, this app can't be uploaded in Github Pages.

## Features

- SPA: Single Page Application. The requests are fast and comfortable, without needing any page refresh between them.
- Perform request of four different kinds: trivia, math, year or date.
- History that stores all the requests that you've done. It won't be deleted even if you leave the page or close your browser.

## Compile source

Just clone the repository and run the following commands in its root folder. You'll need NPM or Yarn.

```sh
npm install
npm run build
```

or if you're using Yarn:

```sh
yarn
yarn build
```

Then, build an http local server on dist/ directory. If your server uses https it won't work.

## Production Dependencies

All dependencies are managed through the package manager.

| Name | Version | Use |
| ----------- | ----------- | ----------- |
| Vue | 2.6.6 | DOM manipulation |
| Vuex | 3.0.1 | Store general states like the request type that is currently selected |
| Axios | 0.18.0 | Ajax requests |
| Bootstrap | 4.3.1 | Css reboot, grid system and table styling |
| Lodash.debounce | 4.0.8 | Make requests after some miliseconds automatically when you are entering text input |
| Moment | 2.24.0 | Date history displaying |
