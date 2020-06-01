// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

class Control extends Component {
    render() {
      return (
        <ul>
            <li><a href="/create" onClick={(e) => {
                e.preventDefault();
                this.props.onChangeMode('create');
            }}>create</a></li>
            <li><a href="/update" onClick={(e) => {
                e.preventDefault();
                this.props.onChangeMode('update');
            }}>update</a></li>
            <li><button type="button" value="delete" onClick={(e) => {
                e.preventDefault();
                this.props.onChangeMode('delete');
            }}>delete</button></li>
        </ul>
      );
    }
}

export default Control;