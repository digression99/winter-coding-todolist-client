import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import _ from 'lodash';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { toastMessage } from "../../lib";

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
  margin-bottom : 2rem;
`;

const Form = styled.form`
  display : flex;
  flex-direction : column;
`;

const ButtonBox = styled.div`
  display : flex;
  justify-content : flex-end;
  margin-top : 1rem;
`;

class TodoForm extends Component {

    state = {
        title : "",
        content : "",
        priority : 1,
        expirationDate : moment().format('YYYY-MM-DDThh:mm'),
        isExpirationDateChecked : false,
        isPriorityChecked : false
    };

    validate() {
        console.log(this.state);
        const { title, content, expirationDate, isExpirationDateChecked } = this.state;
        const error = {};

        if (!title || title.length < 1) {
            error.title = "You need to write title.";
        }

        if (!content || content.length < 1) {
            error.content = "You need to write content.";
        }

        if (isExpirationDateChecked) {
            const expDateTime = moment(expirationDate).valueOf();
            const nowDate = moment().valueOf();
            if (expDateTime - nowDate < 0) {
                error.expirationDate = "You can't set expiration date to past.";
            }
        }
        return error;
    }

    handleChange(name) {
        return e => this.setState({ [name]: e.target.value || e.target.checked });
    }

    handleSubmit() {
        const error = this.validate();

        if (!_.isEmpty(error)) {
            console.log('error occured.');
            console.log(error);
            for (let dat in error) {
                toastMessage(error[dat]);
            }
        } else {
            this.props.onSubmit({
                ...this.state,
                expirationDate : moment(this.state.expirationDate).valueOf()
            });
        }
    }

    render() {
        const { classes } = this.props;

        const {
            title,
            content,
            isPriorityChecked,
            isExpirationDateChecked,
            priority,
            expirationDate
        } = this.state;

        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);

        return (

            <Form autoComplete="off">
                <TitleInput
                    id="todo-title"
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={handleChange('title')}
                    required
                />
                <ContentInput
                    id="todo-content"
                    type="text"
                    name="content"
                    placeholder="contents"
                    value={content}
                    onChange={handleChange('content')}
                    required
                />

                <FormControl>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent : 'space-between'
                        }}
                    >
                        <InputLabel>priority</InputLabel>
                        <Select
                            id="todo-priority"
                            value={priority}
                            onChange={handleChange('priority')}
                            disabled={!isPriorityChecked}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                        <div>
                            <Checkbox
                                checked={isPriorityChecked}
                                color="primary"
                                onChange={handleChange('isPriorityChecked')}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent : 'space-between'
                        }}
                    >
                        <TextField
                            id="todo-expiration-date"
                            type="datetime-local"
                            defaultValue={expirationDate}
                            label="expiration date"
                            name="expirationDate"
                            disabled={!isExpirationDateChecked}
                            onChange={handleChange('expirationDate')}
                        />
                        <div>
                            <Checkbox
                                checked={isExpirationDateChecked}
                                color="primary"
                                onChange={handleChange('isExpirationDateChecked')}
                            />
                        </div>
                    </div>
                </FormControl>
                <ButtonBox>
                    <Button
                        component={Link}
                        variant="contained"
                        color="primary"
                        to="/"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
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
