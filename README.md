🧠 React Redux Toolkit Project
📘 Overview

This project was developed as part of the Front-End Engineer Path in the Codecademy curriculum.
The main objective was to apply and reinforce core concepts from React-Redux and the Redux Toolkit through practical implementation.

The application demonstrates modular state management, efficient data flow, and a clear understanding of how Redux integrates into a modern React application.

🎯 Learning Goals

Configure modular slice files using createSlice() (@reduxjs/toolkit)

Set up a centralized store with configureStore() and integrate individual slices (@reduxjs/toolkit)

Use useSelector() and custom selectors to access data from the store (react-redux)

Create selectors for retrieving and manipulating specific parts of the state (react-redux)

Dispatch actions using useDispatch() to trigger reactivity and update UI components (react-redux)

Understand the Redux workflow:
View → Middleware → Action (Dispatch) → Store → Updated View

⚙️ Tech Stack

React (Functional Components + Hooks)

Redux Toolkit (@reduxjs/toolkit)

React-Redux (useSelector, useDispatch)

JavaScript (ES6+)

HTML5 / CSS3

Node.js & npm

🚀 Getting Started

Follow these steps to set up and run the project locally.

1️⃣ Clone the repository
git clone https://github.com/grinard0071988/flashcards-quizz.git
cd flashcards-quizz

2️⃣ Install dependencies
npm install


💡 If you encounter dependency issues with older React versions, use:

npm install --legacy-peer-deps

3️⃣ Run the app in development mode
npm start


The app will run locally at:
👉 http://localhost:3000

4️⃣ Build for production
npm run build


This will create an optimized build in the /build directory.

🌐 Deployment (Netlify)

To deploy this app on Netlify:

Push your project to a public GitHub repository.

Log in to Netlify
 and select “Add New Site → Import an Existing Project.”

Connect your GitHub account and choose this repository.

In the build settings, set:

Build command: npm run build

Publish directory: build

Add an environment variable (if needed):

NODE_VERSION = 14


Click Deploy Site and wait for Netlify to finish the build.
You’ll get a live URL like:
https://flashcards-quizz.netlify.app
