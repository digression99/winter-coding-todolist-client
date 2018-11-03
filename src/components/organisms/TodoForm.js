import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
import Input from '@material-ui/core/Input'
import {withStyles} from '@material-ui/core/styles';

import {toastMessage} from "../../lib";

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
  margin-top : 1rem;
  font-family : monospace, Monaco;
`;

const Form = styled.form`
  display : flex;
  flex-direction : column;
`;

const ButtonBox = styled.div`
  display : flex;
  margin-top : 1rem;
  width : 100%;
`;

class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title : "",
            content : "",
            priority : 1,
            expirationDate : moment(),
            isExpirationDateChecked : false,
            isPriorityChecked : false,
            isCompleted : false,
            isExpirationNotified : false
        };

        this.state = {
            ...this.state,
            ...this.props,
            priority : this.props.priority || this.state.priority,
            expirationDate : moment(this.props.expirationDate || this.state.expirationDate).format('YYYY-MM-DDTHH:mm')
        };
    }
    validate() {
        const {title, expirationDate, isExpirationDateChecked} = this.state;
        const error = {};

        if (!title || title.length < 1) {
            error.title = "You need to write title.";
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
        return e => {
            let val = e.target.value || e.target.checked;

            if (val === undefined || val === null) {
                val = "";
            }
            this.setState({[name]: val});
        };
    }

    handleSubmit() {
        const error = this.validate();

        if (!_.isEmpty(error)) {
            for (let dat in error) {
                toastMessage(error[dat]);
            }
        } else {
            const {
                isExpirationDateChecked,
                isPriorityChecked,
                priority,
                expirationDate
            } = this.state;

            const {
                onSubmit,
                updateId
            } = this.props;

            const expDate = (isExpirationDateChecked && moment(expirationDate).valueOf()) || null;
            const prty = (isPriorityChecked && priority) || null;

            onSubmit({
                ...this.state,
                expirationDate: expDate,
                priority : prty,
                isExpirationNotified: !(isExpirationDateChecked === true)
            }, parseInt(updateId));
        }
    }

    onDeleteButtonClick() {
        const { onDeleteTodo, updateId } = this.props;
        onDeleteTodo(parseInt(updateId));
    }

    render() {
        const { classes, updateId } = this.props;

        const {
            title,
            content,
            isPriorityChecked,
            isExpirationDateChecked,
            priority,
            expirationDate,
        } = this.state;

        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);
        const onDeleteButtonClick = this.onDeleteButtonClick.bind(this);

        return (
            <Form autoComplete="off">
                <FormControl>
                    <Input
                        id="todo-title"
                        component={TitleInput}
                        className={`${classes.titleInput}`}
                        placeholder="title"
                        name="title"
                        value={title}
                        onChange={handleChange('title')}
                        required
                    />
                </FormControl>
                <ContentInput
                    id="todo-content"
                    type="text"
                    name="content"
                    placeholder="contents"
                    value={content}
                    onChange={handleChange('content')}
                    maxLength="100"
                />

                <FormControl className={`${classes.selectInput}`}>
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
                </FormControl>
                <FormControl
                    className={`${classes.expirationDateInput}`}
                >
                    <TextField
                        id="todo-expiration-date"
                        type="datetime-local"
                        defaultValue={expirationDate}
                        label="expiration date"
                        name="expirationDate"
                        disabled={!isExpirationDateChecked}
                        onChange={handleChange('expirationDate')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <div>
                        <Checkbox
                            checked={isExpirationDateChecked}
                            color="primary"
                            onChange={handleChange('isExpirationDateChecked')}
                        />
                    </div>
                </FormControl>
                <ButtonBox>
                    {
                        updateId && (
                            <div
                                style={{
                                    display : 'flex',
                                    flex : '1 1 auto',
                                    justifyContent : 'flex-start'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="large"
                                    onClick={onDeleteButtonClick}
                                >
                                    Delete
                                </Button>
                            </div>
                        )
                    }
                    <div
                        style={{
                            display : 'flex',
                            flex : '1 1 auto',
                            justifyContent : 'flex-end'
                        }}
                    >
                        <Button
                            component={Link}
                            variant="contained"
                            color="primary"
                            to="/"
                            size="large"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            color="secondary"
                            className={`${classes.button}`}
                            size="large"
                        >
                            Submit
                        </Button>
                    </div>
                </ButtonBox>
            </Form>
        );
    }
}

const styles = theme => ({
    button: {
        marginLeft: '1.5rem'
    },
    titleInput: {
        fontFamily: 'monospace, Monaco',
        fontSize: '2rem'
    },
    selectInput : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    expirationDateInput : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
});

export default withStyles(styles)(TodoForm);
