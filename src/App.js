import React, { Component } from 'react';
import { Icon, Label, Button } from 'semantic-ui-react'
import './App.css';
import firebase from 'firebase'

import Header from './components/Header'
import Recharts from './components/Recharts'
import Composed from './components/Composed'
import 'semantic-ui-css/semantic.min.css'

import Occ from './components/Occ'

const styles = {
  sign: {
    position: 'absolute',
    top: 15,
    left: window.innerWidth - 120
  }
}
let provider = new firebase.auth.GoogleAuthProvider()

const config = {
  apiKey: "AIzaSyBWbbhY771lR6ckh6w90SLUlvvJ1W-BiSM",
  authDomain: "tuna-98072.firebaseapp.com",
  databaseURL: "https://tuna-98072.firebaseio.com",
  projectId: "tuna-98072",
  storageBucket: "tuna-98072.appspot.com",
  messagingSenderId: "343473200555"
}
const fire = firebase.initializeApp(config)


class App extends Component {
  constructor(props){
    super(props)
    this.state = {user:'', data:[], dataCount:0, currentItem:null, ids: []}
  }
  componentDidMount(){
    const store = fire.database().ref('report/')
    let data = []
    store.on('value', snap => {
      
      let items = snap.val()
      let ids = []
      // console.log(items)
      for (let item in items){
        // console.log('item ' + item)
        ids.push(item)
        // console.log(items[item].Day)
        data.push({
          id: item,
          ADR: items[item].ADR,
          Available: items[item].Available,
          Occupied: items[item].Occupied,
          OccPercent: items[item].OccPercent,
          RoomRev: items[item].RoomRev,
          RevPAR: items[item].RevPAR,
          DueOut: items[item].DueOut,
          Day: items[item].Day,
          Date: items[item].Date,
          createdAt: new Date()
        })
      
      }

      this.setState({ids:ids})
      this.setState({data: data})
      this.setState({dataCount: data.length})
      data = []
      this.getDataToGraph(this.state.data)
      
    })
    
    

  }
  getDataToGraph(data){
    if (data) {
      let occ = []
      for (let i in data){
        occ.push({
          value: parseInt(data[i].OccPercent.substr(0, data[i].OccPercent.length - 2), 10)
        })
      }
      this.setState({occPercent: occ})
      // console.log(occ)
    }  
  }

  signInToGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // console.log(token)
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    })
  }
  getProfile(){
    let user = firebase.auth().currentUser;
    if (user) {
      // console.log(user.email)
      this.setState({user: user.email})
    } else {
      console.log('not signed in')
    }
  }
  




  render() {
    // firebase.auth().onAuthStateChanged(function(user) { console.log(user.email)})
    // this.signInToGoogle()
    // this.getProfile()
    return (
      <div className="App">

        <Header dataCount={this.state.dataCount} profile={this.state.user} signClickGoogle={()=>this.signInToGoogle()}/>

        <Recharts data={this.state.occPercent} />

        <Occ data={this.state.data} />

        <Composed />
          
          
      </div>
    );
  }
}

export default App;
