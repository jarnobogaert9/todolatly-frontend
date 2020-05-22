import { BASE_API_URL } from '../config';

const addTodo = async (text, token) => {
    const response = await fetch(`${BASE_API_URL}/todos/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify({
            text: text,
        })
    });
    const json = await response.json();
    console.log(json);
    if (response.status == 500) {
        return 500;
    }
    if (response.status == 400) {
        return 400;
    }
    if (response.status == 201) {
        return 201;
    }
}

const fetchTodos = async (token) => {
    const response = await fetch(`${BASE_API_URL}/todos`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    });
    const json = await response.json();
    return json;
}

export {
    addTodo,
    fetchTodos
}