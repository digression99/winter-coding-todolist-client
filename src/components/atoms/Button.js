import React from 'react';
import Button from '@material-ui/core/Button';

export default ({
                    onClick,
                    isDisabled,
                    color,
                    children, href
                }) => {
    return (
        <Button
            variant="contained"
            color={color}
            disabled={isDisabled}
            onClick={onClick}
            href={href}
        >
            {children}
        </Button>
    );
};