import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null, };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBN45kmckpenOQrX-iMUQC73ybPCqpFDOo',
      authDomain: 'auth-e7a59.firebaseapp.com',
      databaseURL: 'https://auth-e7a59.firebaseio.com',
      storageBucket: 'auth-e7a59.appspot.com',
      messagingSenderId: '11190766205'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
