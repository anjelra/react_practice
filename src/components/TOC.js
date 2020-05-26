// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

// table of content(TOC) -> 목차
class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
        lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
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