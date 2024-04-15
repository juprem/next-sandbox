interface DynamicPageProps {
    params: string;
}

export function DynamicPage({ params }: DynamicPageProps) {
    return <div>{params}</div>;
}

export default DynamicPage