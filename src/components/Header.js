import React from 'react'
import Particles from 'react-particles-js'
import { Button } from 'semantic-ui-react'


const styles = {
  subtitle: { 
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100
  },
  title: {
    position: 'absolute',
    top: 0
  },
  sign: {
    position: 'absolute',
    top: 15,
    left: window.innerWidth - 120
  }
}

export default props => (
  <div>
    <header className="App-header">
        <Particles 
            height={'20px'}
            params={{
              particles: {
                number: {
                  value: props.dataCount
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
          <h1 className="App-title" style={styles.title}>Graphyte &copy; <span style={styles.subtitle}>| real-time data handling</span></h1>
          
        </header>
        <Button style={styles.sign} onClick={props.signClickGoogle}>Sign in</Button>
         
          <h3>Client: Clarion New Hope (demo)</h3>
  </div>
)