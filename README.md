 git remote add origin https://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@github.com/midulislamrasel01/firebase

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

##### (INITIAL SETUP)#######

# 1. Firebase visit

    firebase.google.com

# 2. Create a new firebase Project

    Projet name :

# 3. (Vist Doc) go to Docs

    Build>Authentication>web>get start

# 4. Register web app

    firebae project home>click web>giv name and register

# 5. Install firebase for you project

    npm install firebase

# 6. Dangerous

    get firebase config and put it in src>firebase>(firebase.init.js (filenaem))

# 7. Export

    app from firebase.init.js(filename)
    export default app;

##### (PROVIDER SETUP)#######

# 8. app.js

    import "./App.css";
    import { GoogleAuthProvider, getAuth } from "firebase/auth";
    import app from "./firebase/firebase.init";

    const auth = getAuth(app);

    function App() {
    const provider = new GoogleAuthProvider();
    return <div className="App"></div>;
    }
    export default App;

# 9. Go go firebase > Build > Authentication > sign In method

    Enable google sign in method

# 10. HandelGoogleSinginIN Button

        <button onClick={handelGoogleSingIn}>Google Authentication</button>

# 11 Firebase Popup

    const handelGoogleSingIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    console.log(user);
    })
    .catch((error) => {
    console.log("error: ", error);
    });
    };

##### (DISPLAY USER DATA)#######
