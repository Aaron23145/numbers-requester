# Numbers Requester

An app that consumes http://numbersapi.com/. Just created for testing and learning vue purposes. It does not work on http servers (explained why below).

## Why the Numbers Requester does not work on https servers?

This app does not work on https because it uses an http api to fetch the data (http://numbersapi.com). If you use an https server the ajax requests that performs this project will be blocked by the browser because of downgrade. Therefore, this app can not be uploaded in Github Pages.


## Live

You can see the app working in a live static http server there: http://numbers-requester.getforge.io/
If it does not work, try it with the mirror: http://numbers-requester.co.nf/

## Compile source

Just clone the repository and run the following commands in its root folder.
```
npm install
npm run build
```
Then, build an http local server on /dist/ directory. If your server uses https it will not work.

## Production Dependencies

All dependencies are managed through Node Package Manager.

| Name | Version | Use |
| ----------- | ----------- | ----------- |
| Axios | 0.18.0 | Ajax requests |
| Bootstrap | 4.3.1 | Css reboot, grid system and table styling |
| Lodash.debounce | 4.0.8 | Make requests after some miliseconds automatically when you are entering text input |
| Moment | 2.24.0 | Date history displaying |
| Vue | 2.6.6 | DOM manipulation |
| Vuex | 3.0.1 | Store general states like the request type that is currently selected |

## TO DO

- Write unit tests
- Write integration tests
- Write end-to-end tests
