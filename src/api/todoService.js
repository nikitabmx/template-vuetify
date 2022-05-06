import http from './config'

export async function createTodo(title, description) {
    try {
        const response = await http.post('/items', {
            title, description
        })
        return response?.data ?? {}
    } catch (error) {
        console.error({ error });
    }
}

export async function fetchTodoList() {
    try {
        const response = await http.get('/items')
        return response?.data?.todoList ?? []
    } catch (error) {
        console.error({ error });
    }
}

export async function patchTodo(id, { isCompleted }) {
    try {
        const response = await http.patch('/items/' + id, {
            isCompleted
        })
        return response?.data ?? {}
    } catch (error) {
        console.error({ error });
    }
}