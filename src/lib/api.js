
const ASYNC_DELAY = 200;

let todos = [
    {
        title: "priority one.",
        content: "this is priority one.",
        priority: 1,
        isCompleted : false,
        id: 1,
        expirationDate: new Date().getTime() + 5000,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: false,
        isPriorityChecked: true
    },
    {
        title: "priority two",
        content: "this is priority two.",
        priority: 2,
        isCompleted : false,
        id: 2,
        expirationDate: new Date().getTime() + 10000,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: true,
        isPriorityChecked: true
    },
    {
        title: "priority three",
        content: "this is priority three.",
        priority: 3,
        isCompleted : false,
        id: 3,
        expirationDate: new Date().getTime() + 20000,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: true,
        isPriorityChecked: true
    },
    {
        title: "no priority",
        content: "This is no priority",
        priority: null,
        isCompleted : false,
        id: 4,
        expirationDate: new Date().getTime() + 23000,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: true,
        isPriorityChecked: false
    },
    {
        title: "no priority & expiration date.",
        content: "This is no priority & no expiration date.",
        priority: null,
        isCompleted : false,
        id: 5,
        expirationDate: null,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: false,
        isPriorityChecked: false
    },
];

export const fetchTodos = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(todos);
    }, ASYNC_DELAY);
});

export const updateTodo = todo => new Promise((resolve, reject) => {
    setTimeout(() => {
        let updateIdx = -1;
        todos.map((item, idx) => {
            if (item.id === todo.id) {
                updateIdx = idx;
            }
        });

        if (updateIdx === -1) {
            reject("todo not found.");
            return;
        }

        todos = [...todos.slice(0, updateIdx),
            todo,
            ...todos.slice(updateIdx + 1)
        ];

        resolve(todos);
    }, ASYNC_DELAY);
});

export const insertTodo = todo => new Promise((resolve, reject) => {
    setTimeout(() => {
        todos = [...todos, todo];
        resolve(todos);
    }, ASYNC_DELAY);
});

export const deleteTodo = id => new Promise((resolve, reject) => {
    setTimeout(() => {
        todos = todos.filter(todo => todo.id !== id);
        resolve(todos);
    }, ASYNC_DELAY);
});