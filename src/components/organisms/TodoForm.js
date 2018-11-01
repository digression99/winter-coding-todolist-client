import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';

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
  resize : none;
`;

const Form = styled.form`
  display : flex;
  flex-direction : column;
`;

const ButtonBox = styled.div`
  display : flex;
  justify-content : flex-end;
`;

class TodoForm extends Component {

    state = {
        title : "",
        content : "",
        priority : 1,
        dateExpire : null
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
        const { classes } = this.props;
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
                <ButtonBox>
                    <Link to="/">
                        <Button
                            variant="contained"
                            disabled={false}
                            color="primary"
                        >
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        onClick={() =>
                            this.props.onSubmit(this.state.title, this.state.content)}
                        isDisabled={false}
                        color="secondary"
                        className={`${classes.submitButton}`}
                    >
                        Submit
                    </Button>
                </ButtonBox>
            </Form>
        );
    }
}

const styles = theme => ({
    submitButton : {
        marginLeft : '1.5rem'
    }
});

export default withStyles(styles)(TodoForm);
