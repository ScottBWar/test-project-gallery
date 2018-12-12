# Photo Gallery
#### Using Pixabay API (https://pixabay.com/en/service/about/api/)

Displays Pictures from Pixabay API. 'npm start' runs 'npm test' & 'npm dev', and the project is then served on localhost:8080. (*Note: please make sure to have the latest version of node before starting.*)

### Basic Requiremens

- Built with html/js/css
- LESS is used as a CSS pre-processor
- Webpack is used as a build tool
- `npm i && npm start` from the root directory will run the app. `npm dev` will serve the project without running any test files.
- All JS is vanilla JS. No frameworks, ES6 or other supersets
- Responsive design is taken into consideration as much as possible within the time constraints, using flex and minor media queries
- The application works in chrome. Chrome's CORS restrictions are worked-around using (https://cors-anywhere.herokuapp.com). I'm sure there are better ways to do this, but this is what I chose in order to get this done within the time constraints.
- Unit Tests are run with `npm test`. There are only two written unit tests, but the tools are there (mocha & jsdom) for writing more thorough and meaningful unit tests in the future.

### Other things  to note

- Pixabay API is iffy. Repeated requests to the API seem to fail when made too frequently.
- If something's wrong with the request to the Pixabay API, the page should use 'mock mode' and then show you some pictures of kittens.



