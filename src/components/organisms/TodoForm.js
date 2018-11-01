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
  justify-content : flex-end;
  margin-top : 1rem;
`;

class TodoForm extends Component {

    componentDidMount() {
        console.log('props : ', this.props);
    }

    constructor(props) {
        super(props);
        const {
            title,
            content,
            priority,
            expirationDate
        } = this.props;

        this.state = {
            title : title || "",
            content : content || "",
            priority : (priority && priority !== -1 && priority) || 1,
            expirationDate : (expirationDate !== -1 && moment(expirationDate).format('YYYY-MM-DDTHH:mm')) || moment().format('YYYY-MM-DDTHH:mm a'),
            isExpirationDateChecked : (expirationDate && expirationDate !== -1 && true) || false,
            isPriorityChecked: (priority && priority !== -1 && true) || false,
        }
    }
    validate() {
        console.log(this.state);
        const {title, expirationDate, isExpirationDateChecked} = this.state;
        const error = {};

        if (!title || title.length < 1) {
            error.title = "You need to write title.";
        }

        if (isExpirationDateChecked) {
            const expDateTime = moment(expirationDate).valueOf();
            const nowDate = moment().valueOf();
            if (expDateTime - nowDate < 0) {
                console.log('expiration date : ', expDateTime);
                error.expirationDate = "You can't set expiration date to past.";
            }
        }
        return error;
    }

    handleChange(name) {
        return e => this.setState({[name]: e.target.value || e.target.checked || ""});
    }

    handleSubmit() {
        const error = this.validate();
        const {
            isExpirationDateChecked,
            expirationDate
        } = this.state;

        if (!_.isEmpty(error)) {
            console.log('error occured.');
            console.log(error);
            for (let dat in error) {
                toastMessage(error[dat]);
            }
        } else {
            const expDate = (isExpirationDateChecked && moment(expirationDate).valueOf()) || -1;

            this.props.onSubmit({
                ...this.state,
                expirationDate: expDate
            }, this.props.updateId);
        }
    }

    render() {
        const {classes} = this.props;

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
                        className={`${classes.submitButton}`}
                        size="large"
                    >
                        Submit
                    </Button>
                </ButtonBox>
            </Form>
        );
    }
}

const styles = theme => ({
    submitButton: {
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
