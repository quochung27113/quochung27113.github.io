import './App.css';
import React from 'react';
import Count from './Count';
import Info from './Info';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // text: 'demo',
      // status: true,
      // textParent: 'Edit and save to reload',
      result:0,
      styleOjb:{},
      arrInfo: [
        {
        fullName: 'Name 1',
        age: 10,
        },
        {
          fullName: 'Name 2',
          age: 20,
        },
        {
          fullName: 'Name 3',
          age: 30,
        },
    ],
    isRender: false,

    }
  }
  
  decreCount = () => {
    this.setState(
      {
        result: this.state.result -1,
      }
    )
  }
  increCount = () => {
    this.setState(
    {
      result: this.state.result +1,
    }
  )}

  styleH1 = () => {
    this.setState ({
      styleOjb: {
        backgroundColor: 'red',
      fontSize: '100px',
    }
    })
  }
  renderInfo = () => {
    console.log('ere')
    return this.state.arrInfo.map((item, index) => {
            return <Info key={index} fullName={item.fullName} age={item.age}/>
    })
  }
  handleRender = () => {
    this.setState({
      isRender: true,
    })
  }
  render(){
    const {result, styleOjb, arrInfo, isRender} = this.state;
    return (
      <div className = "App">
        {/* <h1 style={styleOjb}>{result}</h1>
        <Count prev = {this.decreCount} next = {this.increCount} />
        <button onClick={this.styleH1}>Change style</button> */}
        <button onClick={this.handleRender} >Render</button>
        {
          isRender ? this.renderInfo() : <p>Chua co du lieu </p> 
        }
        {/* {
          this.renderInfo()
        } */}
        
      </div>
    )
  }
}
export default App;