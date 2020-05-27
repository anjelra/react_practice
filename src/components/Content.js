// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log('Content render');
        return (
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
        );
    }
}

export default Content;