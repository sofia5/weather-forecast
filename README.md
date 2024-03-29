# Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the [Open Weather API](https://openweathermap.org/api).

## Comments

- It's changing name between Gothenburg and Nordstaden (which probably share the entered coordinates).
- The data is between now and 4 days ahead

## Improvements

- It would be nice to be able to enter a city name / coordinates to show other locations as well
- Maybe more lines (min, max) could be added to the graph to improve the view
- It would've been nice to show what the weather is like (sunny, cloudy) - maybe in a view of "current weather" or adding the info to the chart
- Caching the data (maybe 3h, until a new time enter appears)
- More tests could be added

Note: React is a framework I'm learning, and thus, it's probably possible to optimize things like how the data is fetched.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and reloads when edits are made. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance, and makes it ready for deployment.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
