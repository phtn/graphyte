import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js'
import firebase from 'firebase'
// import Graph from './components/graph'


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
    this.state = {data:[], dataCount:0, currentItem:null}
  }
  componentDidMount(){
    const store = fire.database().ref('prototype_1')
    let data = []
    store.once('value', snap => {
      
      let items = snap.val()
      console.log(typeof(items))
      for (let item in items){
        console.log(item)
        data.push({
          id: item,
        })
      }
      
      //     primary: items[item].cdatetime,
      //     // secondary: items[item].crimedescr,
      //     // gran: items[item].point_granularity
      //   })
        
        // this.setState({data: data}, d=> {this.setState({currentItem: item})})
        //  console.log(this.state.data[0])
        // console.log(item)
        
      // }     
      this.setState({data: data}, ()=> this.setState({dataCount: data.length}))
      
    })
    
    

  }
  getList(data){
    if (data) {
        // let index = data.findIndex(x => x.id === data[i].id)
      
      // console.log(index)
      // console.log(data.length)
      return data.map((item)=> (
        <li key={item.id}>{item.id}</li>
      ))
      // console.log(data)
    }
    
  }
  log(a){
    console.log(a)
  }
  render() {
    // this.getList(this.state.data)
    // console.log(this.state.data)
    // console.log(this.state.data)
    // console.log(this.state.currentItem)
    return (
      <div className="App">
        <header className="App-header">
        <Particles 
            height={'150'}
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
                  distance: 10
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
          <h1 className="App-title">Graphyte &copy; </h1>
        </header>
          
          {/* {this.state.data.map(item => (
            <ul key={item.name}>{item.owner} | {item.id} | {item.name}</ul>
          ))} */}
          {/* <Graph data={this.state.data}/> */}
          {/* <ol>{
            this.state.data.map(item=> (
              <li key={item.id}>{item.id}</li>
            ))
          }</ol> */}
          {this.getList(this.state.data)}

          
          
      </div>
    );
  }
}

export default App;
