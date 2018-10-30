import React from 'react';
import Button from '@material-ui/core/Button';

export default ({ onSubmit, isDisabled }) => {
    return (
        <Button
            variant="contained"
            color="secondary"
            disabled={isDisabled}
            onClick={onSubmit}
        >Submit
        </Button>
    );
};