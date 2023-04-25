# F1 Season 2005-2023 champions Lead Board App
#### Mobiquity Senior FE Dev assigment app
An app to present a list of F1 world champions starting from 2005 until now.

## Main requirements
- An app request list of F1 winners from 2005 until 2023
- Clicking on an item shows the list of the winners for every race for the selected year
- Row where the winner that been the world champion in the same season should be highlighted (if winner of the round is the champion of the season)
- UI should be clear to fit best result
- Sticking to the single page application is mandatory
- App should be delivered to GitHub and be shared for viewing by multiple people

## UI/UX
Take https://www.leanportal.nl/ as a reference for UI/UX implementation

## Data source
Use http://ergast.com/mrd/ link to get documentation over Ergast Developer API
-- here must be list of API endpoints

## Architecture
- Clean,reusable code
- Frontend best practices
- Cache when using API
- React hooks
- No backend

## Developer info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Packages used:
- React - render engine
- React-router - pages routing util
- Tailwind - styling util
- Zustand - app state manager
- Jest,RTL - testing libraries
- Serve - local development server to verify production build

#### Dev commands:
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
If you want Jest to update test snapshots after test has changed you can use:
### `npm run test-update`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run serve`
Deploy your prod. version of the app to local server, so you can test it before to deploy to your cloud provider.

### `npm run start-prod`
Build and Deploy your prod. version of the app to local server. This is combined `npm run build` and `npm run serve` commands.

Everything works? Great! You know how to contact me ;)

#### email: `serhiihrudakov@gmail.com`
