import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyD2Q7A3NJJSeuUXOUsfHZwwAOzlqEZSMtQ',
        authDomain: 'firechat-r2d2.firebaseapp.com',
        databaseURL: 'https://firechat-r2d2.firebaseio.com',
        projectId: 'firechat-r2d2',
        storageBucket: 'firechat-r2d2.appspot.com',
        messagingSenderId: '64062860276',
        appId: '1:64062860276:web:85ada862b4644d627ca7a1',
        measurementId: 'G-T33J3FECPR',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };
  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    return this.db.off();
  }

  get db() {
    // return firebase.database.ref('messages');
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
