import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default ({
                    isChecked = false,
                    color = "primary",
                    onChange,
                    id
                }) => (
    <>
        <Checkbox
            checked={isChecked}
            color={color}
            onChange={onChange}
        />
    </>
);