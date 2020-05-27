// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

class Subject extends Component {
    // 자바스크립트 최신 스펙.. class 안에 선언된 function은 function 생략. 따라서 render()는 함수임.
    // 주의!!!! component를 만들 때는 반드시 하나의 최상위 태그로 시작해야함.
    // 여기서는 header가 최상위 태그임..
  
    // this.props는 태그 속성의 attribute 라고 생각하면 편함.
    render() {
      return (
        <header>
              <h1><a href="/">{this.props.title}</a></h1>
              {this.props.sub}
          </header>
      );
    }
}

export default Subject;