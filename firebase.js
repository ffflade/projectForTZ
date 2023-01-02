// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getRemoteConfig } from 'firebase/remote-config';
let rcDefaults = require('./google-service.json');
import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqa0VEqi-goZNR1wGpkU0JvCMcCm6yEEs',
  authDomain: 'project1-fff90.firebaseapp.com',
  projectId: 'project1-fff90',
  storageBucket: 'project1-fff90.appspot.com',
  messagingSenderId: '959913658811',
  appId: '1:959913658811:web:ab0300aea714d8bfa15c9e',
  measurementId: 'G-03YGWXPSVK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 4000;
remoteConfig.defaultConfig = {
  welcome_message: 'Welcome'
};


const rcDefaultsFile = await fetch('google-service.json');
const rcDefaultsJson = await rcDefaultsFile.json();
remoteConfig.defaultConfig = rcDefaultsJson;