import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Wrapper = styled.form`
  display : flex;
  flex-direction : column;
`;

class TestPage extends Component {

    state = {
        // startDate : moment(),
        priority : 1,
        dateTime : moment().format('YYYY-MM-DDThh:mm')
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('on handle submit.');
        console.log(this.state);

        // console.log('finish time : ', this.state.startDate.valueOf());
        console.log('priority : ', this.state.priority);
        console.log('date time : ', moment(this.state.dateTime).valueOf());
    }

    handlePriorityChange(e) {
        console.log('selected value : ', e.target.value);
        this.setState({
            priority : e.target.value
        })
    }

    handleTimeChange(e) {
        console.log('time change : ');
        console.log(e.target.value);
        console.log('time in milliseconds : ', moment(e.target.value).valueOf());
        this.setState({
            dateTime : moment(e.target.value).format('YYYY-MM-DDThh:mm')
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Wrapper>
                This is test page.
                <FormControl>
                    <InputLabel
                        required={true}
                    >Priority</InputLabel>
                    <Select
                        value={this.state.priority}
                        onChange={this.handlePriorityChange.bind(this)}
                        inputProps={{
                            name : 'priority',
                            id : 'priority'
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue={this.state.dateTime}
                        label="expiration date"
                        onChange={this.handleTimeChange.bind(this)}
                        className={`${classes.datePicker}`}
                        required={true}
                    />
                    <TextField
                        type="text"
                        required={true}
                    />
                    <button
                        onClick={this.handleSubmit.bind(this)}
                    >Submit</button>
                </FormControl>
            </Wrapper>
        );
    }

    handleChange(date) {
        console.log('date in milliseconds : ', date.valueOf());
        // console.log('date : ', date.valueOf());
        // console.log('moment date : ', moment(date).milliseconds());
        this.setState({
            startDate : date
        })
    }
}

const styles = theme => ({
    datePicker : {
        minWidth : '15rem'
    }
});

export default withStyles(styles)(TestPage);