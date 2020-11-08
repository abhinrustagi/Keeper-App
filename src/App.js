import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./Notes";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

function App() {
    // return firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
            return <Notes />
        // } else {
    //         return (<div>
    //             <Header />
    //             <Footer />
    //         </div>);
    //     }
    // });
}

export default App;