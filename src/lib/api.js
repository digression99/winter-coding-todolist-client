

const todos = [
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
        isPriorityChecked: false
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
        isExpirationDateChecked: false,
        isPriorityChecked: false
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
        isExpirationDateChecked: false,
        isPriorityChecked: false
    },
    {
        title: "no priority",
        content: "This is no priority",
        priority: -1,
        isCompleted : false,
        id: 4,
        expirationDate: new Date().getTime() + 20000,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: false,
        isPriorityChecked: false
    },
    {
        title: "no priority & expiration date.",
        content: "This is no priority & no expiration date.",
        priority: -1,
        isCompleted : false,
        id: 5,
        expirationDate: -1,
        dateCreated: new Date().getTime(),
        isExpirationNotified: false,
        isExpirationDateChecked: false,
        isPriorityChecked: false
    },
];

export const fetchTodos = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(todos);
    }, 1000);
});