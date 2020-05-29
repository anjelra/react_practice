// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        // html5의 form 기본 기능에 action 속성은 /create_process 페이지로 이동해라 라는 뜻임.
        // input type="submit" 버튼을 주게 되면 저 버튼을 클릭했을 때 form 태그의 action 을 받음.
        // post 로 보내야 하는 이유는(insert, update, delete) get 방식으로 보내게 되면 url 에 노출이 되기 때문에
        // 노출이 되지 않는 post 방식으로 보내면 됨.
        // onSubmit의 e.preventDefault() 메소드를 호출하는 이유는, form 기본 기능은 페이지 전환이 일어나기 때문에
        // e.preventDefault() 를 사용해서 페이지가 이동하지 못하도록 막아야함.
        return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.insertTOC(e.target.title.value, e.target.desc.value);
                }}
            >
                <p><input type="text" name="title" placeholder="title"></input></p>
                <textarea name="desc" placeholder="description"></textarea>
                <p><input type="submit"></input></p>
            </form>
        </article>
        );
    }
}

export default CreateContent;