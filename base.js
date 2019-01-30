import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'

const config = {
  apiKey: 'AIzaSyBtf5aZgXj5lQAw4rLYjLuETt9BvW0Pt7o',
  authDomain: 'portfolio-51454.firebaseapp.com',
  databaseURL: 'https://portfolio-51454.firebaseio.com',
}

export default (!firebase.apps.length
  ? Rebase.createClass(firebase.initializeApp(config).database())
  : firebase.app().database())
