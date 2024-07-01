import {todoFetch} from "@/service/todoFetch";
import dayjs from "dayjs";

interface DynamicPageProps {
    params: { id: string };
}

export async function DynamicPage({ params }: DynamicPageProps) {
    const { getTodo } = todoFetch();
    const data = await getTodo(params.id);

    return (
        <>
            <div>{data.name}</div>
            <div>{dayjs(data.createdTime).format("DD MMMM YYYY HH:mm:ss")}</div>
            <div>{data.description}</div>
        </>
    );
}

export default DynamicPage;
