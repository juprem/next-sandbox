import { basicFetch } from './basicFetch';
import { TodoSchema, TodosSchema } from '@/model/Todo';

export function todoFetch() {
    const { getRequest } = basicFetch();

    async function getAllTodos() {
        const result = await getRequest('/todos');

        return TodosSchema.parse(result);
    }

    async function getTodo(id: string) {
        const result = await getRequest(`/todos/${id}`);

        return TodoSchema.parse(result);
    }

    return { getAllTodos, getTodo };
}
