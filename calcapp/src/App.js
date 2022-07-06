// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  constructor (){
    super();
    this.state = {
      result : 0,
      numbers : [0,1,2,3,4,5,6,7,8,9],
      operators : ["+","-","*","/"],
      equation : ''
    }
  } 

  NumberClick = (number) => {
    this.setState({equation:this.state.equation+ number})
  }
  OperatorClick = (operator) => {
    this.setState({equation:this.state.equation+ operator})
  }
  render(){
    return (
      <div className='App'>
        <h1>Basic Calculator</h1>
        <div>
          {this.state.numbers.map((number,index)=>{
            return (
              <button onClick={()=>this.NumberClick(number)} key={index}>{number}</button>
            )
          })}
        </div>
        <div>
        {/* <button onClick={this.addBtn}>+</button>
        <button onClick={this.addBtn}>-</button>
        <button onClick={this.addBtn}>*</button>
        <button onClick={this.addBtn}>/</button> */}
        {this.state.operators.map((operator,index)=>{
          return (
            <button key={index} onClick={this.OperatorClick(operator)}>{operator}</button>
          )
        })}
        </div>
        <div>
          <p>The Result is :(this.state.result)</p>
          <p>The Equation is :(this.state.equation)</p>
        </div>
      </div>

    );
  }
}

export default App;
