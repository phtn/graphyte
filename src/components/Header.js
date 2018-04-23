import React from 'react'
import Particles from 'react-particles-js'
import { Button, Image } from 'semantic-ui-react'
import Google from '../assets/google-plus.svg'


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
    left: window.innerWidth - 120,
    backgroundColor: 'red !important'
  },
  sign2: {
    position: 'absolute',
    top: 15,
    left: window.innerWidth - 220
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
          <h1 className="App-title" style={styles.title}>Graphyte &copy; <span style={styles.subtitle}> | real-time data handling</span></h1>
          
        </header>
        {/* <Button style={styles.sign2} onClick={()=>console.log('beta test')}>Beta</Button> */}
        <Button style={styles.sign} onClick={props.signClickGoogle} inverted>
          <Image src={Google} height={20} alt=''/>
        </Button>
         
          <h3>Client: Clarion New Hope (demo)</h3>
  </div>
)