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
      mode: 'read',
      selected_content_id: 2,
      welcome: {title: 'welcome', desc: 'Hello, React!!'},
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', desc:'HTML is HyperText Markup Language.'},
        {id: 2, title: 'CSS', desc:'CSSS is for design'},
        {id: 3, title: 'Javascript', desc:'Javascript is for interactive'}
      ]
    };  // state 값 초기화
  }

  // react는 state값이 바뀌면 해당 state를 사용하는 component의 render() 부분이 다시 호출됨.
  // render() 함수가 다시 호출되므로 따라서 render() 함수 하위에 있는 컴포넌트들도 render() 함수가 있기 때문에
  // 화면이 다시 그려짐.
  // 그 말은 즉슨, props 나 state값이 바뀌면 화면이 다시 그려짐.
  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      var data = this.state.contents;

      while (i < data.length) {
        if (this.state.selected_content_id === data[i].id) {
          _title = data[i].title;
          _desc = data[i].desc;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode: 'welcome'
            });
          }}>
          {/* onChangePage={function() {
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}> */}
        </Subject>
        {/* <header>
            <h1><a href="/" onClick={function(e) {
              console.log(e);
              e.preventDefault();
              // 여기서 하고자하는 것은 state값을 변경하는 것임. 그런데 event 안에서는 this가 아무값도 들어있지 않음(즉, undefined임)
              // 주의할점
              // 1. 따라서, this의 값을 bind()를 통해 넘겨주어야 함. bind(this) -> bind 함수를 쓰기 싫으면 화살표 함수를 쓰면 됨. 화살표 함수를 쓰게 되면 this 값을 이어주는 역할을 함.
              // 2. this.state.mode = 'welcome' 이라고 상태를 변경하면 react는 상태가 바뀌었는지 알 수 없음. 따라서 setState를 사용해야햠.
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.desc}
        </header> */}
        <TOC 
          data={this.state.contents}
          onChange={(id) => {
            this.setState({
              mode: 'read',
              selected_content_id: parseInt(id)
            });
          }}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  };
}
export default App;