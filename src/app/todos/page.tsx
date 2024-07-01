import Link from 'next/link';
import { todoFetch } from '@/service/todoFetch';
import styles from './Todos.module.scss';
import { TodoContainer } from '@/component/TodoContainer/TodoContainer';

export async function Page() {
    const { getAllTodos } = todoFetch();
    const result = await getAllTodos();

    return (
        <div className={styles.container}>
            {result.map((res) => (
                <Link href={`/todos/${res.id}`} key={res.id} className={styles.linkContainer}>
                    <TodoContainer todo={res} />
                </Link>
            ))}
        </div>
    );
}

export default Page;
