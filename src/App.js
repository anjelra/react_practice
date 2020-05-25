import React, { Component } from 'react';
import './App.css';

// 1. function 형식으로 사용할 수 있다.
// 2. class 형식으로 사용할 수 있다.
// function 형식
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

// class 형식
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         Hello, React!
//       </div>
//     )
//   }
// }

class Subject extends Component {
  // 자바스크립트 최신 스펙.. class 안에 선언된 function은 function 생략. 따라서 render()는 함수임.
  // 주의!!!! component를 만들 때는 반드시 하나의 최상위 태그로 시작해야함.
  // 여기서는 header가 최상위 태그임..
  render() {
    return (
      <header>
            <h1>WEB</h1>
            world wide web!
        </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  };
}
export default App;