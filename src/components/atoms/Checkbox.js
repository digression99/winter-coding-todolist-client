import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default ({
                    isChecked = false,
                    color = "primary",
                    onChange
                }) => (
    <>
        <Checkbox
            style={{
                width : '100px'
            }}
            checked={isChecked}
            color={color}
            onChange={onChange}
        />
    </>
);