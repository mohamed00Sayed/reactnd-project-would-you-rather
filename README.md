# Would You Rather App

This is a React Appliction that is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The Application is all about Voting on Questions and Making Questions. You have to login to start Navigating. Once you're logged
in you can Navigate to Create a new Question or Navigate to the Leaderboard which shows the order of most interactive users in 
the App. Once in, You can Logout from the App.

## Installation

To get started working with the application :

* run `git clone https://github.com/mohamed00Sayed/reactnd-project-would-you-rather`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important
The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll 
and then the same or another user tries to access that poll by its url, the user is asked to sign in and then be shown a 404 
page. That's because new polls will not be accessible at their url because of the way the backend is set up in this application.)

## Contributing

If you are willing to contribute to the project kindly check out [CONTRIBUTING.md](CONTRIBUTING.md).