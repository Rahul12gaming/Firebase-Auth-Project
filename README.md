<h1>React Firebase Google Auth Dashboard</h1>
<p>Welcome to the React Firebase Google Auth Dashboard! This project demonstrates how to integrate Firebase Authentication with Google Sign-In in a React application, featuring a user-friendly dashboard for authenticated users.
</p>

<h1>Table of Contents</h1>
Features
Technologies Used
Getting Started
Setup Instructions
Usage
License
Acknowledgments
Features
User authentication using Google Sign-In
Dashboard for authenticated users
Responsive design
Firebase Firestore integration for data storage
Technologies Used
React
Firebase
Authentication
Firestore
React Router
CSS (or your preferred styling solution)
Getting Started
To run this project locally, follow the setup instructions below.
Images

<h1>Prerequisites</h1>
Make sure you have the following installed:

Node.js (v14 or higher)
npm (or yarn)
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/react-firebase-google-auth-dashboard.git
cd react-firebase-google-auth-dashboard
Install Dependencies:

bash
Copy code
npm install
Firebase Configuration:

<h1>Create a Firebase project in the Firebase Console.</h1>
Enable Google Sign-In in the Authentication section.
Set up Firestore if you plan to use it.
Obtain your Firebase config object and replace the contents of src/firebase-config.js with your configuration:
javascript
Copy code
// src/firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;
Run the Application:

bash
Copy code
npm start
The app will be running at http://localhost:3000.

<h1>Usage</h1>
Navigate to the application in your browser.
Use the "Sign In with Google" button to authenticate.
Once authenticated, you will be redirected to the dashboard where you can manage your data.

<h1>License</h1>
This project is licensed under the MIT License. See the LICENSE file for details.

<h1>Acknowledgments</h1>
Thanks to Firebase for providing easy-to-use authentication services.
Special thanks to the open-source community for their invaluable resources and tutorials.
Feel free to contribute by submitting issues or pull requests! Happy coding!

<h1>ScreenShot's</h1>
![chrome-capture-2024-9-21](https://github.com/user-attachments/assets/31ec49de-d1fb-47ea-9e98-ac3d837eee53)

![chrome-capture-2024-9-21 (1)](https://github.com/user-attachments/assets/da215449-aeca-4702-b088-fba1d1272bd6)


