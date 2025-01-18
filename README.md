# FileProcessorClient - Frontend

This is the frontend application for the FileProcessorAPI, built with React. It allows users to search for files, view file details in a responsive table, and displays relevant error messages when needed.

## Features

- **Search by File Name**: Allows users to search for files by name.
- **Responsive Table**: Displays file data (File, Text, Number, Hex) in a responsive table layout.
- **Error Handling**: Shows error messages when fetching data or when no files are found.

## Tech Stack

- **React**: Frontend framework for building the UI.
- **Redux**: State management to handle the fetching of file data.
- **React-Bootstrap**: Bootstrap components for a clean, responsive UI.
- **React Hooks**: To manage component state and side effects.
- **Axios**: To fetch data from the backend API.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/FileProcessorClient.git
```

In the project directory, you can run:

```bash
    npm install
    npm start
```

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


### Running with Docker Compose

To run the application with Docker Compose, use the following command:

```bash
docker-compose up -d --build
```
This will build the Docker image for the frontend and start the application. Open http://localhost:3000 in your browser to view the app running in the Docker container.


###  Dependencies
This frontend is dependent on the FileProcessorAPI backend. Ensure that the backend API is running before using the frontend application.

###  Modifying the Backend URL
If the backend API URL needs to be changed (e.g., for production or development environments), you can modify the URL in the configuration file. The URL is typically set in the config.js or a similar file in the frontend project. Ensure that the correct URL is set for the backend API to communicate properly.

