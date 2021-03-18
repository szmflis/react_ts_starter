# Boilerplate for react-typescript projects.

This project is basically a scaffolding for react-typescript projects with multiple components already programmed and ready to go.\
It saves hours each time a new typescript-react project is started since it has all the configs and architecture already in place.

## Components

Components are written in their raw form ex. RawCheckbox.tsx - which defines their behaviour, different states, lifecycles and such. \
Those are then styled via styled-components library with styled-system.\
I consider it a practical approach since even if differently styled component is needed, we change one file, we already have defined stories, plumbing for styled-system and whatnot.

Current list of components can be found in /src/components

Components todo: modal - profilepicture - codebox with copy - placeholder (ex. apis & other async req)

## Used libraries

`styled-components` - used for styling every single component, providing themes and such.\
`styled-system` - used for adding props to all components, so that pages can be made without specifying additional components with only added paddings/margin and such.\
`dayjs` - used for time formatting.\
`axios` - sending api calls.\
`html-react-parser` - parsing html from rich text editors - for previews / data retrieved from db.\
`polished` - for additional styling utils.\
`quill` - rich text editor of choice.\
`react`, `typescript`.

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the configured storybook.\
Open http://localhost:6006/?path=/story/ to view it in the browser. \
Page reloads on saves in project directory.

### `npm run build-storybook`

Created a production build of storybook for deployment.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

