**NOTE:** *there are 2 contributors shown (GHMT and matomase). Both are me from different laptops and github users.*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Production-ready architecture and building considerations

*  Typescript for less error prone code
*  Code splitting & lazy load in route modules
*  sass & [7-1 pattern architecture](https://sass-guidelin.es/#the-7-1-pattern)
*  Unit + snapshot tests with Jest & Enzyme (+90% coverage)
*  Modules, domain and service layer separation of concerns for code scalability
*  [Model-adapter pattern](https://dev.to/florimondmanca/consuming-apis-in-angular--the-model-adapter-pattern-3fk5) in service layer for API-to-APP objects transformation (with some personal enhancements like adding an interface and specific typings)
*  Build ready for targeting different browsers and versions (through [browserlist](https://github.com/browserslist/browserslist) + [postcss](https://postcss.org/) & [babel](https://babeljs.io/))

## Other considerations

*  contentful.js SDK for Contentful Content Delivery API interacction (leveraging client-side entry links resolution)
*  Responsiveness through bootstrap classes
*  No existing route validation (redirect to home)
*  Recipe description markdown-like text parsed to html text

## Out of scope (due to lack of time)

*  Error handling module for expected and unexpected exceptions in app and API calls
*  Infinite loading on recipes list
*  Load default image on recipes until real image request finishes
*  Enhancements on image resizing during viewport changes
*  Integration & e2e tests
*  Back-end mock with [json-server](https://github.com/typicode/json-server) (very important feature to avoid back-end dependency during front-end development time)
* More exhaustive unit tests considering more deep use cases

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner (no watch mode).<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
