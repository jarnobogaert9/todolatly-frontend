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
        return {status: 500};
    }
    if (response.status == 400) {
        return {status: 400};
    }
    if (response.status == 201) {
        return {status: 201, todo: json.todo};
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

const deleteTodo = async (token, todoId) => {
    const response = await fetch(`${BASE_API_URL}/todos/${todoId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    });

    const json = await response.json();
    return {response, json};
}

export {
    addTodo,
    fetchTodos,
    deleteTodo
}