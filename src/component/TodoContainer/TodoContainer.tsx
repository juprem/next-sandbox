import { Todo } from '@/model/Todo';
import { Card } from '@/component/Card/Card';
import { Flex } from '@/component/Flex';
import dayjs from 'dayjs';

interface TodoContainerProps {
    todo: Todo;
}

export function TodoContainer({ todo }: TodoContainerProps) {
    return (
        <Card title={todo.name}>
            <Flex gap="1rem" direction="column">
                <div>{todo.description}</div>
                <div>{dayjs(todo.createdTime).format('DD MMMM YYYY HH:mm:ss')}</div>
            </Flex>
        </Card>
    );
}
