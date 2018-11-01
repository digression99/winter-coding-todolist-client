import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Wrapper = styled.form`
  display : flex;
  flex-direction : column;
`;

class TestPage extends Component {

    state = {
        startDate : moment(),
        priority : 1,
        dateTime : moment().format('YYYY-MM-DDThh:mm')
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('on handle submit.');
        console.log(this.state);

        console.log('finish time : ', this.state.startDate.valueOf());
        console.log('priority : ', this.state.priority);
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
    }

    render() {
        const { classes } = this.props;
        return (
            <Wrapper>
                This is test page.
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange.bind(this)}
                />
                <select
                    name="priority"
                    id="priority"
                    onChange={this.handlePriorityChange.bind(this)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={this.state.dateTime}
                    label="expiration date"
                    onChange={this.handleTimeChange.bind(this)}
                    className={`${classes.datePicker}`}
                />
                <button
                    onClick={this.handleSubmit.bind(this)}
                >Submit</button>
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