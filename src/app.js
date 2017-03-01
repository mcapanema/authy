import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBN45kmckpenOQrX-iMUQC73ybPCqpFDOo',
      authDomain: 'auth-e7a59.firebaseapp.com',
      databaseURL: 'https://auth-e7a59.firebaseio.com',
      storageBucket: 'auth-e7a59.appspot.com',
      messagingSenderId: '11190766205'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
