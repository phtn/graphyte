import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js'
import firebase from 'firebase'
import Recharts from './components/Recharts'

import 'semantic-ui-css/semantic.min.css'

import Occ from './components/Occ'

const config = {
  apiKey: "AIzaSyBWbbhY771lR6ckh6w90SLUlvvJ1W-BiSM",
  authDomain: "tuna-98072.firebaseapp.com",
  databaseURL: "https://tuna-98072.firebaseio.com",
  projectId: "tuna-98072",
  storageBucket: "tuna-98072.appspot.com",
  messagingSenderId: "343473200555"
}
const fire = firebase.initializeApp(config)

const styles = {
  subtitle: { 
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100
  } 
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {data:[], dataCount:0, currentItem:null, ids: []}
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
      console.log(occ)
    }  
  }
  




  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <Particles 
            height={'10vh'}
            params={{
              particles: {
                number: {
                  value: this.state.dataCount
                },
                color: {
                  value: '#DAF7A6'
                },
                move: {
                  speed: 1
                },
                line_linked: {
                  distance: 200,
                  color:'#333'
                },
              },
              interactivity: {
                detect_on: 'window',
                events: {
                  onclick: {
                    enable: true,
                    mode: 'repulse'
                  }
                }
              }
            }}
            />
          <h1 className="App-title">Graphyte &copy; <span style={styles.subtitle}>| real-time data handling</span></h1>
        </header>
          
         
          <h3>Client: Clarion New Hope (demo)</h3>
          
          <Recharts data={this.state.occPercent} />

          <Occ data={this.state.data} />
          
          
      </div>
    );
  }
}

export default App;
