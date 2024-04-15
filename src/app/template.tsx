import {ReactNode} from 'react';

interface TemplateRootProps {
    children: ReactNode;
}

export function TemplateRoot({children}: TemplateRootProps) {
    // const [count, setCount] = useState<number>(0);

    return (
        <>
            <div
                style={{
                    padding: '3px',
                    backgroundColor: 'orange',
                    borderRadius: '5px',
                    width: 'fit-content',
                    marginBottom: '1rem'
                }}
                // onClick={() => setCount(count + 1)}
            >
                counter inside a template: 3
            </div>
            {children}
        </>
    );
}

export default TemplateRoot