import React from 'react';
import {withRouter, Redirect} from 'react-router';
import _ from 'lodash';

import {TodoForm} from '../components/organisms';
import {getTodo} from "../lib";

const EditTodoFormContainer = ({
                                   todos,
                                   match: {params},
                                   onEditFormSubmit,
                                   onDeleteTodo
                               }) => {
    const dat = getTodo(todos, params.id);

    if (_.isEmpty(dat)) {
        return (
            <Redirect
                to="/"
            />
        );
    }

    return (
        <div>
            <TodoForm
                {...dat}
                updateId={params.id}
                onSubmit={onEditFormSubmit}
                onDeleteTodo={onDeleteTodo}
            />
        </div>
    );
};

export default withRouter(EditTodoFormContainer);
