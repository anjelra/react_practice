// React 라는 라이브러리에서 Component 라는 클래스를 로딩한다는 뜻
import React, { Component } from 'react';

class UpdateContent extends Component {
    // 태그 안에서 바로 props를 접근할 수는 있지만 수정할 수 없다 왜냐하면 props는 readOnly이기 떄문에
    // 생성자를 선언해서 props의 값을 state로 바꿔주어야 한다.
    // 그런데 태그의 value 값에만 넣고 onChange이벤트를 걸어주지 않으면 안됨.(리엑트 자체에서 막음)
    // 따라서, onChange 이벤트르 걸어서 state의 값을 바로바로 변경해주어야 한다.
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc
        };
    }

    inputFormHandler(e) {
        this.setState({
            // javascript 최신 문법
            // title: e.target.value 처럼 이렇게 된거를 가변적으로 변경해야함. 이유는 title일 수도, desc 일 수도 있기 때문에
            // 그럴러면 가변적으로 받아야 하는데 [] 안에다가 e.target.name 이라고 쓰면 됨 (이게 최신 js 문법이라는 뜻임)
            [e.target.name]: e.target.value
        });
    }

    render() {
        console.log(this.props.data);
        // html5의 form 기본 기능에 action 속성은 /create_process 페이지로 이동해라 라는 뜻임.
        // input type="submit" 버튼을 주게 되면 저 버튼을 클릭했을 때 form 태그의 action 을 받음.
        // post 로 보내야 하는 이유는(insert, update, delete) get 방식으로 보내게 되면 url 에 노출이 되기 때문에
        // 노출이 되지 않는 post 방식으로 보내면 됨.
        // onSubmit의 e.preventDefault() 메소드를 호출하는 이유는, form 기본 기능은 페이지 전환이 일어나기 때문에
        // e.preventDefault() 를 사용해서 페이지가 이동하지 못하도록 막아야함.
        return (
        <article>
            <h2>Update</h2>
            <form action="/update_process" method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    // this.props.updateTOC(e.target.title.value, e.target.desc.value);
                }}
            >
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={(e) => {
                            this.inputFormHandler(e)
                        }}
                    ></input>
                </p>
                <textarea 
                    name="desc" 
                    placeholder="description"
                    value={this.state.desc}
                    onChange={(e) => {
                        this.inputFormHandler(e);
                    }}></textarea>
                <p><input type="submit"></input></p>
            </form>
        </article>
        );
    }
}

export default UpdateContent;