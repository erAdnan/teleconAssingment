# Events Traker

An app developed by Adnan ali.

`MOBILE`

## Installation

Follow the official React Native: Getting Started docs [here](http://facebook.github.io/react-native/docs/getting-started).

Click the "Building Projects with Native Code" tab and follow the instructions for iOS and Android. You will need dependencies like homebrew, node, watchman, Xcode, Android SDK, etc.

Run `npm install` or `yarn` in the root directory to retrieve the node modules required to build and run this project.

#### CocoaPods

Follow their [installation guide](https://guides.cocoapods.org/using/getting-started.html) and then run `pod install` in the ios directory.

## Commands

`npm start` or `yarn start` kicks off the react-native JS packager.

`react-native run-ios` builds the ios project and kicks off the react-native JS packager.

`react-native run-android` builds the android project and kicks off the react-native JS packager.

`npm test` executes tests

## Events Data

used from local json file

## Tools/Libraries

In addition to React Native, i used several other libraries to compose the architecture. some are listed here:

-   [Redux](http://redux.js.org/) for state management
-   [React-navigation](https://reactnavigation.org) for navigating applications
-   [React-native-offline](https://github.com/rgommezz/react-native-offline) for handling offline states and subscribing to online status.
-   [prop-types] for type checking.

## Project Structure

Basic structure of the project folder

├── _tests_                 # to have test cases
├── android                 # Android native
├── ios                     # iOs Native
├── appSrc                  # React Native common code
       |--- actions         # all actions required for redux
       |--- constants       # app constants(colors, metrics etc)
       |--- containers      # it contains(screen, components, modals)
       |--- images          # holds images
       |--- navigation      # navigations process
       |--- reducers        # reducers for redux
       |--- services        # services class here
       |--- store
       |--- other(utils/configs etc)

├── App.js                   
├── index.js
└── README.md