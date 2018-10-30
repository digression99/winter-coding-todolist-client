import React, { Component } from 'react';
import { SubmitButton } from '../atoms';
import styled from 'styled-components';

const TitleInput = styled.input`
  background-color : transparent;
  border : none;
  height : 4rem;
  width : 100%;
  font-size : 2rem;
  font-weight : 400;
  font-family : monospace, Monaco;
`;

const ContentInput = styled.textarea`
  border : none;
  background-color : transparent;
  width : 100%;
  min-height : 10rem;
  font-size : 1.2rem;
`;

const Form = styled.form`
  display : flex;
  flex-direction : column;
`;

class CreateForm extends Component {

    state = {
        title : "",
        content : ""
    };

    handleSubmit(e) {
        console.log('handle submit.');
        console.log(e);
        e.preventDefault();
    }

    handleTitleChange(e) {
        console.log(e.target.value);
        this.setState({
            title : e.target.value
        });
    }

    handleContentChange(e) {
        console.log(e.target.value);

        this.setState({
            content : e.target.value
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <TitleInput
                    type="text"
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
                <ContentInput
                    type="text"
                    name="content"
                    placeholder="contents"
                    value={this.state.content}
                    onChange={this.handleContentChange.bind(this)}
                />
                <div>
                    <SubmitButton
                        onSubmit={() => this.props.onSubmit(this.state.title, this.state.content)}
                    />
                </div>
            </Form>
        );
    }
}

export default CreateForm;
