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
            if (moment(expirationDate).valueOf() < new Date().getTime()) {
                error.expirationDate = "You can't set expiration date to past.";
            }
        }
        return error;
    }

    handleChange(name) {
        if (name === 'expirationDate') {
            return e => this.setState({ [name] : moment(e.target.value).format('YYYY-MM-DDThh:mm') });
        }
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
        return (

            <Form onSubmit={this.handleSubmit} autoComplete="off">
                <TitleInput
                    type="text"
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange('title')}
                    required
                />
                <ContentInput
                    type="text"
                    name="content"
                    placeholder="contents"
                    value={this.state.content}
                    onChange={this.handleChange('content')}
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
                            value={this.state.priority}
                            onChange={this.handleChange('priority')}
                            disabled={!this.state.isPriorityChecked}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                        <div>
                            <Checkbox
                                checked={this.state.isPriorityChecked}
                                color="primary"
                                onChange={this.handleChange('isPriorityChecked')}
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
                            id="expiration-date"
                            type="datetime-local"
                            defaultValue={this.state.expirationDate}
                            label="expiration date"
                            name="expirationDate"
                            disabled={!this.state.isExpirationDateChecked}
                            onChange={this.handleChange('expirationDate')}
                        />
                        <div>
                            <Checkbox
                                checked={this.state.isExpirationDateChecked}
                                color="primary"
                                onChange={this.handleChange('isExpirationDateChecked')}
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
                        onClick={this.handleSubmit.bind(this)}
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
