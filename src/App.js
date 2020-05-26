import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

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


// compoent를 가변적으로 사용하고 싶으면 속성(html)을 넣어주면 되는데
// react에서는 props 라고 함.
// 그러면 효율적으로 사용할 수 있고, 가변적이라 여러 곳에 쓰일 수 있다. 하나의 컴포넌트로!
class App extends Component {
  // component 를 실행할 떄 render() 라는 함수보다 먼저 실행이 되면서
  // 그 component를 초기화시켜주고 싶은 코드는 constructor 안에다가 코드를 작성한다.
  constructor(props) {
    // 파생 클래스에서 super() 함수가 먼저 호출되어야 this 키워드를 사용할 수 있습니다. 그렇지 않을 경우 참조오류가 발생합니다.
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', desc:'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc:'CSSS is for design'},
        {id: 3, title: 'Javascript', desc:'Javascript is for interactive'}
      ]
    };  // state 값 초기화
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  };
}
export default App;