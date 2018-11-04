
import axios from 'axios';

export const fetchTodos = () => new Promise(async (resolve, reject) => {
    try {
        const res = await axios.get('http://localhost:5000/api');
        resolve(res.data.todos);
    } catch (e) {
        console.log('error : ', e);
        reject(e);
    }
});

export const updateTodo = todo => new Promise(async (resolve, reject) => {

    try {
        await axios.patch('http://localhost:5000/api', {todo});
        resolve();
    } catch (e) {
        console.log('error : ', e);
        reject(e);
    }
});

export const insertTodo = todo => new Promise(async (resolve, reject) => {

    try {
        await axios.post('http://localhost:5000/api', {
            todo
        });
        resolve();

    } catch (e) {
        console.log('error : ', e);
        reject(e);
    }
});

export const deleteTodo = id => new Promise(async (resolve, reject) => {
    try {
        await axios.delete('http://localhost:5000/api', {
            data : {
                id
            }
        });
        resolve();
    } catch (e) {
        console.log('error : ', e);
        reject(e);
    }
});