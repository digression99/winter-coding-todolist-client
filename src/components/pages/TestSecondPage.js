import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const options = [
    'by Title',
    'by Expiration Date',
    'by Priority',
    'by Created Date',
];

const categoryOptions = [
    'Completed',
    'Todos'
];

class TestSecondPage extends Component {

    state = {
        anchorEl : null,
        selectedIndex : 1,
        category : "completed",
        categoryAnchorEl : null
    };

    handleClickListItem = event => {
        console.log('current target : ', event.currentTarget);
        console.log('state : ', this.state);
        this.setState({
            anchorEl : event.currentTarget
        })
    };

    handleMenuItemClick = (event, index) => {
        console.log('state : ', this.state);
        this.setState({ selectedIndex : index, anchorEl : null });
    };

    handleClose = () => {
        this.setState({ anchorEl : null })
    };

    handleClickCategoryListItem = event => {
        console.log('current target : ', event.currentTarget);
        console.log('state : ', this.state);
        this.setState({
            categoryAnchorEl : event.currentTarget
        })
    };

    handleCategoryMenuItemClick = (event, category) => {
        console.log('state : ', this.state);
        this.setState({
            category,
            categoryAnchorEl : null
        });
    };

    handleCategoryListClose = () => {
        this.setState({
            categoryAnchorEl : null
        })
    };

    render() {

        const {
            anchorEl,
            categoryAnchorEl
        } = this.state;

        return (
            <div>
                <List
                    component="nav"
                >
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="Sort by"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="Sort by"
                            secondary={options[this.state.selectedIndex]}
                        />
                    </ListItem>
                </List>
                <List
                    component="nav"
                >
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="category-menu"
                        aria-label="Category"
                        onClick={this.handleClickCategoryListItem}
                    >
                        <ListItemText
                            primary={this.state.category.toUpperCase()}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === this.state.selectedIndex}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}

                </Menu>
                <Menu
                    id="category-menu"
                    anchorEl={categoryAnchorEl}
                    open={Boolean(categoryAnchorEl)}
                    onClose={this.handleCategoryListClose}
                >
                    {categoryOptions.map(option => (
                        <MenuItem
                            key={option}
                            disabled={this.state.category === option}
                            selected={this.state.category === option}
                            onClick={event => this.handleCategoryMenuItemClick(event, option)}
                        >
                            {option}
                        </MenuItem>
                    ))}


                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === this.state.selectedIndex}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default TestSecondPage;
