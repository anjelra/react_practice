// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

// table of content(TOC) -> 목차
class TOC extends Component {
    // shouldComponentUpdate 함수는 render() 함수 이전에 호출된다.
    // shouldComponentUpdate 함수의 return 값이 false면 render() 함수는 호출되지 않는다.
    // shouldComponentUpdate 함수의 return 값이 true면 render() 함수가 호출된다.

    // 그런데 만약에, App.js에서 state.contents의 state값을 concat으로 하지 않고 push로 한다면
    // newProps의 값과 this.props.data의 값이 반드시 같으므로 push는 사용하지 않는게 좋다.

    // shouldComponentUpdate 함수가 필요없는 경우에는 그냥 push 를 사용해도 상관이 없다.
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }

    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
        lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/" + data[i].id} 
                    data-id={data[i].id}
                    // data-id 라고 쓰면 e.target.dataset 안에 들어간다(유용하게 쓸 수 있으므로 반드시 기억)
                    onClick={(e) => {
                    e.preventDefault();
                    this.props.onChange(e.target.dataset.id);
                }}>
                {data[i].title}</a></li>);
                i = i + 1;
        }
      return (
        <nav>
            <ul>
               {lists}
            </ul>
        </nav>
      );
    }
}

// TOC라는 js 를 가져다 쓰는 쪽에서 이 코드로 인해 TOC 라는 클래스를 가져갈수 있게 됨.
export default TOC;